from django.shortcuts import render,redirect
from . models import Trip , User
from django. contrib import messages
import bcrypt

# Create your views here.

def register(request):
    return render(request,"registerlogin.html")

def process_reg(request):
    errors = User.objects.user_validator(request.POST)
    if len(errors) > 0 :
        for key , value in errors.items():
            messages.error(request, value)
        return redirect('/')
    
    first_name = request.POST ['first_name']
    last_name = request.POST ['last_name']
    email = request.POST ['email']
    password = request.POST ['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    newuser = User.objects.create (first_name = first_name, last_name = last_name , email = email, password = pw_hash)
    request.session["user_id"] = newuser.id
    return redirect('dashboard')

def dashboard(request):


    return render(request,"dashboard.html")

    
