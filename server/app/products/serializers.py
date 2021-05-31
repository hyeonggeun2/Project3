from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from products.models import Product, ProductBase


class ProductCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)
    content = serializers.CharField(max_length=500)
    color = serializers.ListField()
    size = serializers.ListField()


class ProductListSerializer(serializers.ModelSerializer):
    product_set = serializers.StringRelatedField(many=True)

    class Meta:
        model = ProductBase
        fields = ['pk', 'name', 'price', 'discount', 'image', 'category', 'product_set']
