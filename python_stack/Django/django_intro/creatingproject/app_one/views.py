from django.shortcuts import render,HttpResponse,redirect
def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")
def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")
def create(request):
    return redirect("https://docs.djangoproject.com/en/dev/topics/http/shortcuts/#redirect")
def show(request, num):
    return HttpResponse("placeholder to display blog number 15")
def edit(request, editnum):
    return HttpResponse(f"placeholder to edit blog {editnum}")
def destory (request, number):
    return redirect("http://nooooooooooooooo.com/")



# Create your views here.
