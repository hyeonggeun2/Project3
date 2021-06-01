from django.contrib import admin

# Register your models here.

from .models import *


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
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


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_per_page = 5
    list_display = (
        'name', 'price', 'category'
    )
    list_editable = ('price',)
    list_filter = ('category',)
    search_fields = ('name',)

    fields = ['name', 'price', 'category', 'color', 'size', 'info', 'buy_guide', 'image']


@admin.register(QnA)
class QnAAdmin(admin.ModelAdmin):
    list_per_page = 5
    list_display = (
        'product', 'title', 'date'
    )
    list_filter = ('date',)

    fields = ['product', 'title', 'question', 'answer', 'date']
    readonly_fields = ['date']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_per_page = 5
    list_display = (
        'product', 'title', 'date'
    )
    list_filter = ('date',)

    fields = ['product', 'title', 'content', 'answer', 'date']
    readonly_fields = ['date']
