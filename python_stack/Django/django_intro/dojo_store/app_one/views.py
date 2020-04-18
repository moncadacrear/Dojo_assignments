from django.shortcuts import render, redirect
from time import gmtime,strftime
# import random

def store(request):
    return render(request, "store.html")

def checkout(request):
    quant1 = request.POST['quantity1']
    quant2 = request.POST['quantity2']
    quant3 = request.POST['quantity3']
    first_name= request.POST['first_name']
    student = request.POST['student_id']

    return redirect(f"/process/{quant1}/{quant2}/{quant3}/{first_name}/{student}")


def process(request,quant1,quant2,quant3,first_name,student):
    context = {
        "quantone" : quant1,
        "quanttwo" : quant2,
        "quantthree" : quant3,
        "firstn" : first_name,
        "studentID" :student,
        "total" : int(quant1)+int(quant2)+int(quant3) ,
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime()),
    }
    return render(request , "checkout.html", context)


