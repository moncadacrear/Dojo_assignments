from django.shortcuts import render, HttpResponse, redirect
from .models import Users

# Create your views here.

def index(request):
    all_users = Users.objects.all()
    context ={
        "all_users_templates":all_users
    }
    return render(request,"user.html",context)


def all_users(request):
    print("-"*50)
    first_name = request.POST["first_name"]
    last_name = request.POST["last_name"]
    email_address = request.POST["email_address"]
    age = request.POST["age"]

    print(first_name, last_name, email_address, age)
    print("-"*50)
    Users.objects.create(first_name = first_name , last_name = last_name , email_address = email_address, age = age) 
    return redirect("/")    
