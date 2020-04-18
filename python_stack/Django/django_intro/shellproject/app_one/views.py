from django.shortcuts import render,HttpResponse
from models import Game

# Create your views here.
def index (request):
    return HttpResponse('Is this even workiing ')
