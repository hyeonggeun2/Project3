from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from members.models import User
from members.serializers import LoginSerializer, SignUpSerializer, InfoSerializer, GetUserInfoSerializer, \
    ChangeInfoSerializer


# 로그인 (성공시 토큰 반환)
class LoginAPIView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
        else:
            raise AuthenticationFailed()

        serializer = LoginSerializer(user)
        data = {
            'token': token.key,
            'user': serializer.data,
        }
        return Response(data)


# 회원가입
class SignupAPIView(APIView):
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                "detail": "가입 완료",
            }
            return Response(data)
        else:
            return Response({"ERROR": "ERROR"})


class ChangeUserInfoAPIView(APIView):
    def post(self, request):
        serializer = ChangeInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.change()
            data = {
                "detail": "변경 완료",
            }
            return Response(data)
        else:
            return Response({"ERROR": "ERROR"})


class GetUserInfoAPIView(APIView):
    def post(self, request):
        serializer = GetUserInfoSerializer(data=request.data)
        if serializer.is_valid():
            token = request.data['token']
            user = Token.objects.get(key=token).user

            return Response(InfoSerializer(user).data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
