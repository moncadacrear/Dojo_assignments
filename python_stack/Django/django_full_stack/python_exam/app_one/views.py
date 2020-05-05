from django.shortcuts import render,redirect
from . models import Trip , User
from django.contrib import messages
import bcrypt

# Create your views here.

def register(request):
    return render(request,"registerlogin.html")

def process_reg(request):
    errors = User.objects.user_val(request.POST)
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
    return redirect('/dashboard')



def loginsite(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0 :
        for key , value in errors.items():
            messages.error(request, value)
        return redirect('/')
    user_account = User.objects.filter(email = request.POST['email'])
    login_user = user_account[0]
    request.session["user_id"] = login_user.id
    return redirect('/dashboard')


def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user=User.objects.get(id = request.session["user_id"])
    all_trips = user.trips.all()
    context ={
        "all_trips": all_trips,
        "user":user 
    }
    return render(request,"dashboard.html",context)

def new_trip(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user":User.objects.get(id = request.session["user_id"])
    }
    return render(request, "new_trip.html",context)


def create_trip(request):
    if 'user_id' not in request.session:
        return redirect('/')
    errors = Trip.objects.trip_validator(request.POST)
    if len(errors)>0:
        for key , value in errors.items():
            messages.error(request, value)
        return redirect('/new_trip')
    destination = request.POST ['destination']
    start_date = request.POST['start_date']
    end_date = request.POST['end_date']
    plan = request.POST ['plan']
    user=User.objects.get(id = request.session["user_id"])
    Trip.objects.create(destination = destination , start_date = start_date , end_date= end_date, plan = plan, user = user)
    return redirect('/dashboard')


def edit(request, trip_id):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "trip_info":Trip.objects.get(id = trip_id),
        "user":User.objects.get(id = request.session["user_id"])
    }

    return render(request,"edit_trip.html",context )

def edit_trip(request):
    if 'user_id' not in request.session:
        return redirect('/')
    trip_id = Trip.objects.get(id=request.POST['trip_id'])
    errors = Trip.objects.trip_validator(request.POST)
    if len(errors)>0:
        for key , value in errors.items():
            messages.error(request, value)
        return redirect(f'/edit/{trip_id.id}')
    trip_id.destination = request.POST['destination']
    trip_id.start_date = request.POST['start_date']
    trip_id.end_date = request.POST['end_date']
    trip_id.plan = request.POST['plan']
    trip_id.save()
    return redirect("/dashboard")


def trips(request, trip_id):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "trip_info":Trip.objects.get(id = trip_id),
        "user":User.objects.get(id = request.session["user_id"])
    }
    return render(request, "trip_info.html",context)





def remove(request, cancel):
    remove_flight = Trip.objects.get(id=cancel)
    remove_flight.delete()
    return redirect('/dashboard')


def logout(request):
    request.session.flush()
    return redirect('/')