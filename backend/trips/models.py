from django.db import models


class Trip(models.Model):
    departure_street = models.CharField(max_length=50)
    departure_city = models.CharField(max_length=50)
    destination_city = models.CharField(max_length=50)
    departure_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f'{self.departure_city} - {self.destination_city}'
