from django.urls import path

from products.apis import ProductListAPIView

urlpatterns = [
    path('<str:category>/<int:page>/', ProductListAPIView.as_view()),
]