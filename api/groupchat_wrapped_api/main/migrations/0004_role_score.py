# Generated by Django 3.1.5 on 2021-01-31 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20210131_1016'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='score',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
    ]