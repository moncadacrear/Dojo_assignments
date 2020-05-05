from django.urls import path     
from . import views
urlpatterns = [
    path('',views.register),
    path('process_reg', views.process_reg),
    path('loginsite', views.loginsite),
    path('dashboard',views.dashboard),
    path('new_trip', views.new_trip),
    path('create_trip', views. create_trip),
    path('edit/<int:trip_id>', views.edit),
    path('edit_trip', views.edit_trip),
    path('trips/<int:trip_id>', views.trips),
    path('logout', views.logout),
    path('remove/<int:cancel>', views.remove),
]