from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Country(models.Model):
    countryName = models.CharField(max_length=50, unique=True)
    code = models.CharField(max_length=20, null=True)
    def __str__(self):
        return self.countryName


class City(models.Model):
    country = models.ForeignKey(
        Country, null=True, blank=True, on_delete=models.SET_NULL)
    cityName = models.CharField(max_length=50,)
    def __str__(self):
        return self.cityName
    
class AcountUser(models.Model):
    user = models.OneToOneField(
        User, related_name='acountUser_user', on_delete=models.CASCADE)
    acountUserName = models.CharField(max_length=50,)
    acountUserNumber=models.IntegerField(null=True, default=0)
    address = models.TextField(null=True)
    city = models.ForeignKey(City, null=True, on_delete=models.SET_NULL)
    mobileNumber = models.CharField(max_length=30,)
    email = models.CharField(max_length=50,)
    date_created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.acountUserName

    
class CustomerInfo(models.Model):
    customerName = models.CharField(max_length=50,)
    customerNumber=models.IntegerField(null=True, default=0)
    address = models.TextField(null=True)
    country = models.ForeignKey(Country, null=True, on_delete=models.SET_NULL)
    city = models.ForeignKey(City, null=True, on_delete=models.SET_NULL)
    mobileNumber = models.CharField(max_length=30,)
    email = models.CharField(max_length=50,)
    date_created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.customerName
class  Shipment(models.Model):
    type_shipment = (
        ('envelope', 'envelope'),
        ('box', 'box'),    
    )
    status_shipment = (
        ('recipient', 'recipient'),
        ('notrecipient', 'notrecipient'),    
    )
    shipment_number = models.IntegerField(default=0)
    sender_date =models.DateTimeField(auto_now_add=True)
    customer_sender = models.ForeignKey(CustomerInfo, related_name='sender', null=True, on_delete=models.SET_NULL)
    customer_receiver = models.ForeignKey(CustomerInfo, related_name='receiver', null=True, on_delete=models.SET_NULL)
    shipment_destination = models.ForeignKey(City, null=True, on_delete=models.SET_NULL)
    shipment_type = models.CharField(default='envelope',max_length=10,choices=type_shipment)
    number_parts = models.IntegerField(default=1)
    weight  = models.IntegerField(default=1)
    shipment_terms =models.TextField(null=True)
    content = models.TextField(null=True)
    expected_time =models.DateTimeField(auto_now_add=True)
    delivery_date =models.DateTimeField(auto_now_add=True)
    date_created = models.DateTimeField(auto_now_add=True)
    acountUser_giver = models.ForeignKey(AcountUser, related_name='giver', null=True, on_delete=models.SET_NULL)
    acountUser_recipient = models.ForeignKey(AcountUser, related_name='recipient', null=True, on_delete=models.SET_NULL)
    barcode = models.IntegerField(default=1)
    status = models.CharField(default='notrecipient',max_length=30,choices=status_shipment)

    def __str__(self):
        return self.shipment_number
        

    class Movement(models.Model):
        movement_number  = models.IntegerField(default=1)
        movement_date  = models.DateTimeField(auto_now_add=True)
        movement_destination = models.ForeignKey(City, null=True, on_delete=models.SET_NULL)
        acountUser_movement = models.ForeignKey(AcountUser, null=True, on_delete=models.SET_NULL)
        def __str__(self):
            return self.movement_number