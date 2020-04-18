from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string


def index(request):
    return render(request, "index.html")


def wordgenertor(request):
    if "count" not in request.session:
        request.session["count"]=0
        
    request.session['count']+=1
    
    context={
        "count": request.session['count'],
        "generator":get_random_string(length=14),
    }
    return render(request,"index.html",context)



def reset(request):
    request.session.flush()
    return redirect("/wordgenertor")


