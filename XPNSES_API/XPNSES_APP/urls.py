from django.conf.urls import url
from XPNSES_APP import views






urlpatterns=[
    
    #Products
    url(r'^products$', views.productsApi),
    url(r'^products/([0-9]+)$', views.productsApi),

    #Tickets
    url(r'^tickets$', views.ticketsApi),
    url(r'^tickets/([0-9]+)$', views.ticketsApi),

    #Ticket_details
    url(r'^ticket_details$', views.ticket_detailsApi),
    url(r'^ticket_details/([0-9]+)$', views.ticket_detailsApi),

    #Supermarkets
    url(r'^supermarkets$', views.supermarketsApi),
    url(r'^supermarkets/([0-9]+)$', views.supermarketsApi),

    #Customers
    url(r'^customers$', views.customersApi),
    url(r'^customers/([0-9]+)$', views.customersApi)


] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# +static()   # Agregado el +static, la original phrase inclye variables que se utilizaron para guardar el file, que yo no guardo:

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# From Geekforgeeks: https://www.geeksforgeeks.org/e-commerce-website-using-django/?ref=lbp
# cambio: + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# por + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



