from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt # To allow other domains to access our methods.
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from XPNSES_APP.models import Products, Tickets, Ticket_details, Supermarkets, Customers
from XPNSES_APP.serializers import ProductsSerializer, TicketsSerializer, Ticket_detailsSerializer, SupermarketsSerializer, CustomersSerializer




#Products
@csrf_exempt
def productsApi(request, id=0):
    if request.method=='GET':
        products = Products.objects.all()
        products_serializer=ProductsSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)
    elif request.method=='POST':
        products_data=JSONParser().parse(request)
        products_serializer=ProductsSerializer(data=products_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
    elif request.method=="PUT":
        products_data=JSONParser().parse(request)
        products=Products.objects.get(product_id=products_data['product_id'])     #Chequear !! Si está bien hecha la extrapolación
        products_serializer=ProductsSerializer(products, data=products_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
        return JsonResponse("Failed to Update, try again")
    elif request.method=='DELETE':
        products=Products.objects.get(product_id=id)
        products.delete()
        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)
    

#Tickets
@csrf_exempt
def ticketsApi(request, id=0):
    if request.method=='GET':
        tickets = Tickets.objects.all()
        tickets_serializer=TicketsSerializer(tickets, many=True)
        return JsonResponse(tickets_serializer.data, safe=False)
    elif request.method=='POST':
        tickets_data=JSONParser().parse(request)
        tickets_serializer=TicketsSerializer(data=tickets_data)
        if tickets_serializer.is_valid():
            tickets_serializer.save()
            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
    elif request.method=="PUT":
        tickets_data=JSONParser().parse(request)
        tickets=Tickets.objects.get(ticket_id=tickets_data['ticket_id'])     #Chequear !! Si está bien hecha la extrapolación
        tickets_serializer=TicketsSerializer(tickets, data=tickets_data)
        if tickets_serializer.is_valid():
            tickets_serializer.save()
            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
        return JsonResponse("Failed to Update, try again")
    elif request.method=='DELETE':
        tickets=Tickets.objects.get(ticket_id=id)
        tickets.delete()
        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)
    

#Ticket_details
@csrf_exempt
def ticket_detailsApi(request, id=0):
    if request.method=='GET':
        ticket_details = Ticket_details.objects.all()
        ticket_details_serializer=Ticket_detailsSerializer(ticket_details, many=True)
        return JsonResponse(ticket_details_serializer.data, safe=False)
    elif request.method=='POST':
        ticket_details_data=JSONParser().parse(request)
        ticket_details_serializer=Ticket_detailsSerializer(data=ticket_details_data)
        if ticket_details_serializer.is_valid():
            ticket_details_serializer.save()
            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
    elif request.method=="PUT":
        ticket_details_data=JSONParser().parse(request)
        ticket_details=Ticket_details.objects.get(ticket_details_id=ticket_details_data['ticket_details_id'])     #Chequear !! Si está bien hecha la extrapolación
        ticket_details_serializer=Ticket_detailsSerializer(ticket_details, data=ticket_details_data)
        if ticket_details_serializer.is_valid():
            ticket_details_serializer.save()
            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
        return JsonResponse("Failed to Update, try again")
    elif request.method=='DELETE':
        ticket_details=Ticket_details.objects.get(ticket_details_id=id)
        ticket_details.delete()
        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)


#Supermarkets
@csrf_exempt
def supermarketsApi(request, id=0):
    if request.method=='GET':
        supermarkets = Supermarkets.objects.all()
        supermarkets_serializer=SupermarketsSerializer(supermarkets, many=True)
        return JsonResponse(supermarkets_serializer.data, safe=False)
    elif request.method=='POST':
        supermarkets_data=JSONParser().parse(request)
        supermarkets_serializer=SupermarketsSerializer(data=supermarkets_data)
        if supermarkets_serializer.is_valid():
            supermarkets_serializer.save()
            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
    elif request.method=="PUT":
        supermarkets_data=JSONParser().parse(request)
        supermarkets=Supermarkets.objects.get(supermarket_id=supermarkets_data['supermarket_id'])     #Chequear !! Si está bien hecha la extrapolación
        supermarkets_serializer=SupermarketsSerializer(supermarkets, data=supermarkets_data)
        if supermarkets_serializer.is_valid():
            supermarkets_serializer.save()
            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
        return JsonResponse("Failed to Update, try again")
    elif request.method=='DELETE':
        supermarkets=Supermarkets.objects.get(supermarket_id=id)
        supermarkets.delete()
        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)


#Customers
@csrf_exempt
def customersApi(request, id=0):
    if request.method=='GET':
        customers = Customers.objects.all()
        customers_serializer=CustomersSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
    elif request.method=='POST':
        customers_data=JSONParser().parse(request)
        customers_serializer=CustomersSerializer(data=customers_data)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
    elif request.method=="PUT":
        customers_data=JSONParser().parse(request)
        customers=Customers.objects.get(customer_id=customers_data['customer_id'])     #Chequear !! Si está bien hecha la extrapolación
        customers_serializer=CustomersSerializer(customers, data=customers_data)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
        return JsonResponse("Failed to Update, try again")
    elif request.method=='DELETE':
        customers=Customers.objects.get(customer_id=id)
        customers.delete()
        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)


# Agreagar More_Info

#@csrf_exempt
#def more_infoApi(request, id=0):
#   if request.method=='GET':
#       more_info = More_info.objects.all()
#       more_info_serializer=More_infoSerializer(more_info, many=True)
#       return JsonResponse(more_info_serializer.data, safe=False)
#    elif request.method=='POST':
#        more_info_data=JSONParser().parse(request)
#        more_info_serializer=CustomersSerializer(data=more_info_data) # Acá dejé de caambiar a more_info las variables.
#        if customers_serializer.is_valid():
#            customers_serializer.save()
#            return JsonResponse("Added Succesfully, you are the best, Jimena!", safe=False)
#    elif request.method=="PUT":
#        customers_data=JSONParser().parse(request)
#        customers=Customers.objects.get(customers_id=customers_data['customers_id'])     #Chequear !! Si está bien hecha la extrapolación
#        customers_serializer=CustomersSerializer(customers, data=customers_data)
#        if customers_serializer.is_valid():
#            customers_serializer.save()
#            return JsonResponse("Updated Successfully, Jimena you're a crack!!", safe=False)
#        return JsonResponse("Failed to Update, try again")
#    elif request.method=='DELETE':
#        customers=Customers.objects.get(customer_id=id)
#        customers.delete()
#        return JsonResponse("Deleted successfully, well done Jimena!!", safe=False)

