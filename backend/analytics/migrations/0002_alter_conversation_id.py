# Generated by Django 5.2.1 on 2025-05-24 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
