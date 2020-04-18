from django.shortcuts import render, HttpResponse
from time import gmtime, strftime

def  timedisplay(request):
    context = {
        "time": strftime("%m-%d-%y %+H:%M  %p", gmtime())
    }
    return render(request , 'index.html', context)


