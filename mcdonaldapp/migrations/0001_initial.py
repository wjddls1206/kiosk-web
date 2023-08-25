# Generated by Django 4.2.4 on 2023-08-18 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CallCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderNum', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CartMenu', models.CharField(max_length=50)),
                ('CartQty', models.IntegerField()),
                ('CartPrice', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Menus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('MenuName', models.CharField(max_length=50)),
                ('MenuPrice', models.IntegerField()),
                ('category', models.CharField(default='single', max_length=30)),
            ],
        ),
    ]
