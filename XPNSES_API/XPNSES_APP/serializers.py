from rest_framework import serializers
from XPNSES_APP.models import Products, Tickets, Ticket_details, Supermarkets, Customers


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=('product_id', 'product_name', 'product_category', 'product_brand')  # field = '__all__'


class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tickets
        fields=('ticket_id', 'ticket_code', 'ticket_date', 'total_amount')


class Ticket_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ticket_details
        fields=('ticket_details_id', 'ticket_code', 'article_code', 'article_name', 'article_quantity', 'article_unit_price', 'article_vat')


class SupermarketsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Supermarkets
        fields=('supermarket_id', 'supermarket_name', 'supermarket_link')


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customers
        fields=('customer_id', 'customer_name', 'customer_surname', 'customer_age', 'customer_post_code', 'customer_email')



