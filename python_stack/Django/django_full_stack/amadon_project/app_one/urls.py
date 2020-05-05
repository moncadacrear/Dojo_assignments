from django.urls import path     
from . import views


urlpatterns = [
    path('', views.index),
    path('charge', views.charge),
    path('checkout', views.checkout),
    path ('delete',views.delete),
]