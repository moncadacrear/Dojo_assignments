from django.shortcuts import render, redirect
from .models  import Power , Nemesis , Superhero
# Create your views here.

def index(request):
    return render(request, 'index.html')

def add_power(request):
    return render (request, 'add_power.html')

def create_power(request):
    name = request.POST['name']
    weakness = request.POST['weakness']
    from_equipment = request.POST['from_equipment']
    power.objects.create(name = name, weakness = weakness , from_equipment = from_equipment)
    return request("/")

def all_powers(request):
    context = {
        'all_powers_from_db': power.object.all()
    }
    return render (request, "all_powers.html",context)

def one_power(request,power_id):
    one_power = power.objects.get(id = power_id)
    context = {
        "one_power" : one_power
    }
    return render(request, "one_power.hmtl", context)

def add_nemsis(request):
    context = {
        "all_powers": power.objects.all()
    }
    return render(request, "add_nemesis.html", context)

def create_nemesis(request):
    alias = request.POST['alias']
    power_id = request.POST['evil_power']
    power_to_add = Power.objects.get(id= =power_id)
    new_nemesis = Nemesis.objects.add(power_to_add)
    return redirect('/add_nemesis')
