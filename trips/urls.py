from django.urls import path, include
from .views import (
    TripsListAPIView,
    TripDetailAPIView
)

urlpatterns = [
    path('', TripsListAPIView.as_view(), name="Trips"),
    path('<pk>/', TripDetailAPIView.as_view(), name="Trip-detail"),
]
