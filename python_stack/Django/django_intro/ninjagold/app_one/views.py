from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime
import random

# Create your views here.

def index(request):
    if ' gold' not in request.session:
        request.session ['gold'] = 0
        
    return render (request , "index.html")
