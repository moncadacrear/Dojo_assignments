from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('shows', views.shows),
    path('showinfo/<int:show_id>', views.showinfo),
    path('addnewshow',views.addnewshow),
    path('addshow', views.addshow),
    path('edit/<int:showid>', views.edit),
    path('editshow', views.editshow),
    path('delete/<int:delete_show>', views.delete),
]