from django.urls import path, include
from .views import ProfileDetailAPIView

urlpatterns = [
    path('<pk>/', ProfileDetailAPIView.as_view(), name="profile-detail"),
]
