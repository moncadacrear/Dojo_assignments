from django.urls import path
from . import views

urlpatterns =[
    path('', views.index),
    path('add_power', views.add_power),
    path('create_power',views.create_power),
    path('all_powers'),views.all_powers),
    path('one_power/<int:power_id>', views.one_power),
    path('add_nemesis' views.add_nemsis),
    path('create_nemesis', views.create_nemesis),
    path('all_nemeses', views.all_nemeses),
]