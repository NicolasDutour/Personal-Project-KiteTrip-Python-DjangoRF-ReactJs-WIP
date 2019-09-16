from django.db import models


class Car(models.Model):
    car_brand = models.CharField(max_length=50, null=True)
    car_model = models.CharField(max_length=50, null=True)
    car_color = models.CharField(max_length=50, null=True)
    car_immat = models.CharField(max_length=10, null=True, unique=True)
    car_total_seats = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.car_brand
