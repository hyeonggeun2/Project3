from rest_framework import serializers
from rest_framework.authtoken.models import Token

from members.models import User
from products.models import ProductBase


class LoginSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=30, write_only=True)


class ChangeInfoSerializer(serializers.Serializer):
    token = serializers.CharField()
    password = serializers.CharField(max_length=30)
    phone1 = serializers.CharField(max_length=10)
    phone2 = serializers.CharField(max_length=10)
    phone3 = serializers.CharField(max_length=10)
    postcode = serializers.CharField(max_length=10)
    full_address = serializers.CharField(max_length=50)
    detail_address = serializers.CharField(max_length=50)
    email = serializers.EmailField()

    def change(self, **kwargs):
        token = self.validated_data['token']
        password = self.validated_data['password']
        phone1 = self.validated_data['phone1']
        phone2 = self.validated_data['phone2']
        phone3 = self.validated_data['phone3']
        postcode = self.validated_data['postcode']
        full_address = self.validated_data['full_address']
        detail_address = self.validated_data['detail_address']
        email = self.validated_data['email']

        phone = f'{phone1} - {phone2} - {phone3}'
        address = f'{full_address}, {detail_address} ({postcode})'

        user = Token.objects.get(key=token).user

        user.password = password
        user.phone = phone
        user.address = address
        user.email = email
        user.save()

        return user


class SignUpSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=30)
    name = serializers.CharField(max_length=30)
    phone1 = serializers.CharField(max_length=10)
    phone2 = serializers.CharField(max_length=10)
    phone3 = serializers.CharField(max_length=10)
    postcode = serializers.CharField(max_length=10)
    full_address = serializers.CharField(max_length=50)
    detail_address = serializers.CharField(max_length=50)
    email = serializers.EmailField()

    def save(self, **kwargs):
        username = self.validated_data['username']
        password = self.validated_data['password']
        name = self.validated_data['name']
        phone1 = self.validated_data['phone1']
        phone2 = self.validated_data['phone2']
        phone3 = self.validated_data['phone3']
        postcode = self.validated_data['postcode']
        full_address = self.validated_data['full_address']
        detail_address = self.validated_data['detail_address']
        email = self.validated_data['email']

        phone = f'{phone1} - {phone2} - {phone3}'
        address = f'{full_address}, {detail_address} ({postcode})'

        user = User.objects.create_user(
            username=username,
            password=password,
            name=name,
            phone=phone,
            address=address,
            email=email
        )
        return user


class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # get에 password 보이지 않게
        extra_kwargs = {'password': {'write_only': True}}
        fields = ['pk', 'username', 'password', 'name', 'phone',
                  'address', 'email']


class GetUserInfoSerializer(serializers.Serializer):
    token = serializers.CharField()
