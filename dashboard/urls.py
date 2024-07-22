from django.contrib import admin
from django.urls import path , include

from . import views




app_name='dashboard'

urlpatterns = [

   
    path('', views.home, name='home'),
    path('login',views.userlogin, name='login' ),
    path('sendpck',views.sendpck, name='sendpck' ),
    path('movepck',views.movepck, name='movepck' ),
    path('arrivepck',views.arrivepck, name='arrivepck' ),
    path('manifest',views.manifest, name='manifest' ),
    path('barcode/', views.generate_barcode, name='barcode'),
    path('page_account_settings/', views.page_account_settings, name='page_account_settings'),
    
  

]