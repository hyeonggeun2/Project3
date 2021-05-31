from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
from django.utils.safestring import mark_safe

from members.models import User


class Category(models.Model):
    name = models.CharField(max_length=30)


class ProductBase(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    discount = models.IntegerField()
    image = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def image_tag(self):
        return mark_safe('<img src="/media/%s" width="300" height="400" />' % (self.image))

    image_tag.short_description = 'Image'


class Product(models.Model):
    product = models.ForeignKey(ProductBase, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    color = models.CharField(max_length=20)
    size = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.color}, {self.size}'


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


class Cart(models.Model):
    product = models.ForeignKey(DeliveryDetail, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


# 상품 설명
class ProductDetail(models.Model):
    product = models.OneToOneField(ProductBase, on_delete=models.CASCADE)
    info = models.TextField()


class QnA(models.Model):
    title = models.CharField(max_length=20)
    question = models.TextField()
    answer = models.TextField(null=True, blank=True)
    product = models.ForeignKey(ProductDetail, on_delete=models.CASCADE)


class Review(models.Model):
    title = models.CharField(max_length=20)
    content = RichTextUploadingField()
    answer = models.TextField(null=True, blank=True)
    product = models.ForeignKey(ProductDetail, on_delete=models.CASCADE)
