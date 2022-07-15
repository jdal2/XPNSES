from django.db import models

# Create your models here.

# ej.:
# DepartmentId = models.AutoField(primary_key)

class Products(models.Model):
    product_id = models.AutoField(primary_key=True) #SERIAL
    product_name = models.CharField(max_length=30) #VARCHAR(30) NOT NULL
    product_category = models.CharField(max_length=30) #VARCHAR(30)
    product_brand = models.CharField(max_length=30) #VARCHAR(30)
    
    # CONSTRAINT pk_products PRIMARY KEY(product_id)


class Tickets(models.Model):
    ticket_id = models.AutoField(primary_key=True) #SERIAL
    ticket_code = models.CharField(max_length=30) #VARCHAR(30)
    ticket_date = models.DateField() #DATE DEFAULT NULL
    total_amount = models.FloatField() # DECIMAL NOT NULL - CAMBIADO EL 20 DE MAYO DE 2022, ANTES ERA NUMERIC (INTEGERFIELD)
    #CONSTRAINT pk_tickets PRIMARY KEY(ticket_code)


class Ticket_details(models.Model):
    ticket_details_id = models.AutoField(primary_key=True) #SERIAL
    ticket_code = models.CharField(max_length=30) #VARCHAR(30)
    article_code = models.IntegerField() #INTEGER
    article_name = models.CharField(max_length=30) #VARCHAR(30) NOT NULL
    article_quantity = models.FloatField() #DECIMAL NOT NULL
    article_unit_price = models.FloatField() #DECIMAL NOT NULL
    article_vat = models.FloatField() # DECIMAL NOT NULL
    # pk_ticket_details = models.
    #CONSTRAINT pk_ticket_details PRIMARY KEY(ticket_details_id)

class Supermarkets(models.Model):
    supermarket_id = models.AutoField(primary_key=True) #SERIAL
    supermarket_name = models.CharField(max_length=30) #VARCHAR(30)
    supermarket_link = models.CharField(max_length=30) #varchar(30)
    #CONSTRAINT pk_supermarkets PRIMARY KEY(supermarket_id)

class Customers(models.Model):
    customer_id = models.AutoField(primary_key=True)  #SERIAL
    customer_name =  models.CharField(max_length=30) #VARCHAR(30)
    customer_surname = models.CharField(max_length=30) #VARCHAR(30)
    customer_age = models.IntegerField() #INTEGER
    customer_post_code = models.CharField(max_length=30) # VARCHAR(30)
    customer_email = models.CharField(max_length=30) #VARCHAR(30)
    # CONSTRAINT pk_customers PRIMARY KEY(customer_id)

