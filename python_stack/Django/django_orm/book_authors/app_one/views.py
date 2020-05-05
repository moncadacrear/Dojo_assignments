from django.shortcuts import render, HttpResponse, redirect
from .models import Book , Author
# Create your views here.

def index(request):
    context={
        "all_books": Book.objects.all()
    }

    return render(request , "index.html", context)

def addbook(request):
    title = request.POST["title"]
    desc = request.POST["desc"]
    Book.objects.create(title = title, desc = desc)
    return redirect('/')

def books(request,book_id):
    book_id =Book.objects.get(id=book_id)
    all_authors_book = book_id.authors.all()
    all_authors = Author.objects.all()
    # print("-"*50)
    # print(all_authors)
    # print("-"*50)
    context= {
        "all_authors_book": all_authors_book,
        "book_id" : book_id,
        "all_authors": all_authors,
    }
    return render(request,"books.html",context)


def addauthor_to_book(request):
    author = request.POST["author"]
    book  = request.POST["book"]
    this_author = Author.objects.get(id= author)
    this_book = Book.objects.get(id = book)
    this_book.authors.add(this_author)
    return redirect(f'/books/{this_book.id}')


def authors(request):
    context = {
        "all_authors" : Author.objects.all()
    }
    return render(request, "authors.html",context)

def addauthor(request):
    first_name=request.POST["first_name"]
    last_name = request.POST["last_name"]
    notes = request.POST["notes"]
    Author.objects.create(first_name= first_name , last_name= last_name, notes = notes)
    return redirect('/authors')

def authorinfo(request, author_id):
    author_id = Author.objects.get(id = author_id)
    all_books_author = author_id.books.all()
    all_books = Book.objects.all()
    context = {
        "all_books_author" : all_books_author,
        "all_books": all_books,
        "author_id": author_id,
    }
    return render(request, "aurthorinfo.html", context)

def addbook_to_author(request):
    book = request.POST['book']
    author = request.POST['author']
    this_book = Book.objects.get(id=book)
    this_author = Author.objects.get(id=author)
    this_author.books.add(this_book)
    return redirect(f'/authorinfo/{this_author.id}')