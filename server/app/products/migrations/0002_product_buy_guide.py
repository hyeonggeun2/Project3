# Generated by Django 3.2.3 on 2021-06-01 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='buy_guide',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
