from re import A
from django.contrib import admin

# Register your models here.


#From Geeksforgeeks: https://www.geeksforgeeks.org/django-project-creating-a-basic-e-commerce-website-for-displaying-products/
from . models import *

admin.site.register(Products)
admin.site.register(Tickets)
admin.site.register(Ticket_details)
admin.site.register(Supermarkets)
admin.site.register(Customers)



