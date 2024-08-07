# Generated by Django 4.2.11 on 2024-03-23 13:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AcountUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acountUserName', models.CharField(max_length=50)),
                ('acountUserNumber', models.IntegerField(default=0, null=True)),
                ('address', models.TextField(null=True)),
                ('mobileNumber', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=50)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cityName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('countryName', models.CharField(max_length=50, unique=True)),
                ('code', models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='CustomerInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerName', models.CharField(max_length=50)),
                ('customerNumber', models.IntegerField(default=0, null=True)),
                ('address', models.TextField(null=True)),
                ('mobileNumber', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=50)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('city', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.city')),
            ],
        ),
        migrations.CreateModel(
            name='Shipment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shipment_number', models.IntegerField(default=0)),
                ('sender_date', models.DateTimeField(auto_now_add=True)),
                ('shipment_type', models.CharField(choices=[('envelope', 'envelope'), ('box', 'box')], default='envelope', max_length=10)),
                ('number_parts', models.IntegerField(default=1)),
                ('weight', models.IntegerField(default=1)),
                ('shipment_terms', models.TextField(null=True)),
                ('content', models.TextField(null=True)),
                ('expected_time', models.DateTimeField(auto_now_add=True)),
                ('delivery_date', models.DateTimeField(auto_now_add=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('barcode', models.IntegerField(default=1)),
                ('status', models.CharField(choices=[('recipient', 'recipient'), ('notrecipient', 'notrecipient')], default='notrecipient', max_length=30)),
                ('acountUser_giver', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.acountuser')),
                ('customer_sender', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.customerinfo')),
                ('shipment_destination', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.city')),
            ],
        ),
        migrations.CreateModel(
            name='Movement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movement_number', models.IntegerField(default=1)),
                ('movement_date', models.DateTimeField(auto_now_add=True)),
                ('acountUser_movement', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.acountuser')),
                ('movement_destination', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.city')),
            ],
        ),
        migrations.AddField(
            model_name='city',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.country'),
        ),
        migrations.AddField(
            model_name='acountuser',
            name='city',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.city'),
        ),
        migrations.AddField(
            model_name='acountuser',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='acountUser_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
