from django.db import models
from django.contrib.auth.models import User
from datetime import date


class Profile(models.Model):
    MASCULIN = "Masculin"
    FEMININ = "Féminin"

    GENRE_CHOICES = [
        (MASCULIN, 'Masculin'),
        (FEMININ, 'Féminin')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    genre = models.CharField(
        max_length=10,
        choices=GENRE_CHOICES,
        default='Masculin',
    )
    description = models.TextField(max_length=500, null=True, blank=True)
    phone = models.CharField(max_length=10, null=True)
    date_birth = models.DateField(null=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=100, null=True)
    zip_code = models.CharField(max_length=5, null=True, blank=True)

    def __str__(self):
        return self.user.username
