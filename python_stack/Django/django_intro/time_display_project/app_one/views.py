from django.shortcuts import render, HttpResponse
from time import gmtime, strftime

def  timedisplay(request):
    time  = strftime("%m-%d-%y %+H:%M  %p", gmtime())
    context = {
        "time": time
    }
    return render(request , 'index.html', context)


