from django.urls import path
from . import views 

urlpatterns = [
    path('',views.register),
    path('process_reg', views.process_reg),
    # path('login', views.login),
    path('dashboard',views.dashboard),
]