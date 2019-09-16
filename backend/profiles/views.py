from rest_framework.generics import (
    RetrieveAPIView
)

from profiles.models import Profile
from .serializers import ProfileSerializer


class ProfileDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
