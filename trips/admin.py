from django.contrib import admin
from .models import Trip


class tripAdmin(admin.ModelAdmin):
    list_display = ['driver', 'departure_street',
                    'departure_date', 'created_at']


admin.site.register(Trip, tripAdmin)
