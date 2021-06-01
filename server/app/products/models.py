import json

from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
from django.utils.safestring import mark_safe

from members.models import User


class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    info = models.TextField()
    buy_guide = models.TextField()
    color = models.CharField(max_length=100)
    size = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


# 전체 주문을 가짐
class Delivery(models.Model):
    name = models.CharField(max_length=30)
    data = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=30)
    price = models.IntegerField()  # 총 금액
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    state = models.CharField(max_length=30)


# 한 개의 상품을 몇 개 주문하는지
class DeliveryDetail(models.Model):
    count = models.IntegerField()  # 개수
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    delivery = models.ForeignKey(Delivery, on_delete=models.CASCADE, null=True, blank=True)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE, null=True, blank=True)


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class QnA(models.Model):
    title = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)
    question = models.TextField()
    answer = models.TextField(null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class Review(models.Model):
    title = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    answer = models.TextField(null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
