from django.urls import path

from members.apis import LoginAPIView, SignupAPIView, ChangeUserInfoAPIView, GetUserInfoAPIView

urlpatterns = [
    path('login/', LoginAPIView.as_view()),
    path('signup/', SignupAPIView.as_view()),
    path('info/', GetUserInfoAPIView.as_view()),
    path('change_info/', ChangeUserInfoAPIView.as_view()),
]