# Generated by Django 3.1.2 on 2023-08-24 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcdonaldapp', '0005_rename_packging_payment_packing_alter_menu_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='category',
        ),
        migrations.AddField(
            model_name='menu',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='menu',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='payment',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
