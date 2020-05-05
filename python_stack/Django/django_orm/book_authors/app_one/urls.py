from django.urls import path
from .import views 

urlpatterns =[
    path('', views.index),
    path('addbook',views.addbook),
    path('books/<int:book_id>', views.books),
    path('addauthor_to_book', views.addauthor_to_book),
    path('authors', views.authors),
    path('addauthor',views.addauthor),
    path('authorinfo/<int:author_id>',views.authorinfo),
    path('addbook_to_author',views.addbook_to_author),
]