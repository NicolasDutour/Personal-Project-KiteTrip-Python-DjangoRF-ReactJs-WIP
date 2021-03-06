# Generated by Django 2.2.5 on 2019-09-16 09:37

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
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genre', models.CharField(choices=[('Masculin', 'Masculin'), ('Féminin', 'Féminin')], default='Masculin', max_length=10)),
                ('description', models.TextField(blank=True, max_length=500, null=True)),
                ('phone', models.CharField(max_length=10, null=True)),
                ('date_birth', models.DateField(null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('city', models.CharField(max_length=100, null=True)),
                ('zip_code', models.CharField(blank=True, max_length=5, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
