from django.contrib import admin
from django.urls import path, include

from . import views


app_name = 'main'

urlpatterns = [
     path('', views.home, name='home'),
     path('tracking', views.tracking, name='tracking'),
     path('branches', views.branches, name='branches'),
     path('faq', views.faq, name='faq'),
     path('express', views.express, name='express'),
     path('forwarding', views.forwarding, name='forwarding'),
     path('scan/', views.barcode_scanner, name='barcode_scanner'),
     path('scan2/', views.barcode_scannergemini, name='barcode_scannergemini'),
    
]