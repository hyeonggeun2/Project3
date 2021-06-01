from django.urls import path

from products.apis import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('<str:category>/<int:page>/', ProductListAPIView.as_view()),
    path('<int:pk>/', ProductDetailAPIView.as_view()),
]