from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView
)


from trips.models import Trip
from .serializers import TripSerializer


class TripsListAPIView(ListAPIView):
    queryset = Trip.objects.all().order_by('departure_date')
    serializer_class = TripSerializer


class TripDetailAPIView(RetrieveAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
