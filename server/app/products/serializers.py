from rest_framework import serializers

from products.models import Product, QnA, Review


class ProductCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)
    content = serializers.CharField(max_length=500)
    color = serializers.ListField()
    size = serializers.ListField()


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['pk', 'name', 'price', 'color', 'size', 'image']


class QnaSerializer(serializers.ModelSerializer):
    class Meta:
        model = QnA
        fields = ['title', 'question', 'answer', 'date']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['title', 'content', 'answer', 'date']


class ProductDetailSerializer(serializers.ModelSerializer):
    qna_set = ""
    review_set = ""

    class Meta:
        model = Product
        fields = ['pk', 'name', 'price', 'color', 'size', 'info', 'buy_guide', 'qna_set', 'review_set', 'image']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['qna_set'] = QnaSerializer(instance.qna_set, many=True).data
        response['review_set'] = ReviewSerializer(instance.review_set, many=True).data
        return response
