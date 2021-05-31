from django.contrib import admin

# Register your models here.

from .models import *


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):
    pass


@admin.register(DeliveryDetail)
class DeliveryDetailAdmin(admin.ModelAdmin):
    pass


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    pass


@admin.register(ProductBase)
class ProductBaseAdmin(admin.ModelAdmin):
    fields = ['name', 'price', 'category', 'image', 'image_tag']
    readonly_fields = ['image_tag']


@admin.register(ProductDetail)
class ProductDetailAdmin(admin.ModelAdmin):
    pass


@admin.register(QnA)
class QnAAdmin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
