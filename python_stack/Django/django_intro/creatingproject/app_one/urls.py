from django.urls import path
from . import views
urlpatterns =[
    path('index', views.index),
    path('new', views.new),
    path('create', views.create),
    path ('<int:num>', views.show),
    path('<int:editnum>/edit', views.edit),
    path('<int:number>/delete', views.destory),
]