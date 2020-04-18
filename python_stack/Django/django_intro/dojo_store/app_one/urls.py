from django.urls import path     
from . import views
urlpatterns = [
    path('', views.store),
    path('checkout', views.checkout),
    path('process/<str:quant1>/<str:quant2>/<str:quant3>/<str:first_name>/<str:student>',views.process),
]