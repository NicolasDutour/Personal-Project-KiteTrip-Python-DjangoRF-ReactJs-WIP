from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('trips/', include('trips.urls')),
    path('profile/', include('profiles.urls')),
    path('admin/', admin.site.urls),
]
