from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime
import random

# Create your views here.

def index(request):
    if ' gold' not in request.session:
        request.session ["gold"] = 0
    if 'activities' not in request.session:
        request.session["activities"] =[]
    
    context ={
        "gold" : request.session ['gold'],
        "activities" :request.session["activities"]
    }
    return render (request , "index.html", context)

# def process_money(request):


#     money_place ={
#         'farm': randint(10,20)
#         'cave'; randint(5,10)
#         'house': randint(2,5)
#         'casino':randint(-10,50)
#     }



