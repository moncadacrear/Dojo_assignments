from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('wordgenertor',views.wordgenertor),
    path('reset', views.reset),
]   