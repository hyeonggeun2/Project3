import base64

from rest_framework.response import Response
from rest_framework.views import APIView

from products.models import Product
from products.serializers import ProductListSerializer, ProductDetailSerializer


# 이미지를 base64 형태의 string으로 변환시켜주는 함수
def make64(origin_dict):
    with open(f'.{origin_dict["image"]}', 'rb') as img:
        base64_string = base64.b64encode(img.read())
        origin_dict["image"] = base64_string

    return origin_dict


class ProductListAPIView(APIView):
    def get(self, request, category, page):
        if category == "all":
            product = Product.objects.all()
        else:
            product = Product.objects.filter(category__name=category)

        max_page = len(product) // 12 + 1
        item = product[12 * (page - 1):12 + 12 * (page - 1)]
        serializer = ProductListSerializer(item, many=True)
        res_data = map(make64, serializer.data)
        return Response(
            {
                "max_page": max_page,
                "Item": res_data,
            }
        )


class ProductDetailAPIView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductDetailSerializer(product)
        res_data = make64(serializer.data)
        return Response(res_data)
