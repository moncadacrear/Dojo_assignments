from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.index),
    path('results', views.results),
    path('process/<str:submit_name>/<str:submit_dojolocation>/<str:submit_langauge>/<str:submit_comments>', views.process),
]