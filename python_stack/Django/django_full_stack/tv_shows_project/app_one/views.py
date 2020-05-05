from django.shortcuts import render,redirect,HttpResponse
from django.contrib import messages
from . models import Show

# Create your views here.

def index(request):  
    return render(request , "index.html")

def shows(request):
    context = {
    "all_shows" :Show.objects.all()
    }
    return render(request , "shows.html", context)



def addnewshow(request):
    return render(request,"addshow.html")

def addshow(request):
    errors = Show.objects.show_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/addnewshow")


    title = request.POST['title']
    nextwork = request.POST['nextwork']
    release_date = request.POST['release_date']
    description = request.POST['description']
    newshow = Show.objects.create(title = title, nextwork= nextwork, release_date = release_date, description = description)
    return redirect(f'/showinfo/{newshow.id}')


def showinfo(request,show_id):
    showinfo = Show.objects.get(id=show_id)
    context = {
        "showinfo": showinfo
    }
    return render(request , "showinfo.html", context) 


def edit(request,showid):
    showinfo  = Show.objects.get(id = showid)
    context ={
        "showinfo":showinfo
    }
    return render(request, "editshow.html", context)

def editshow(request):
    errors = Show.objects.show_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/addnewshow")

        
    tvid = request.POST['tvid']
    showid = Show.objects.get(id=tvid)


    if len(request.POST['title'])> 0:
        title = request.POST['title']
        showid.title = title
    else:
        showid.title = showid.title


    if len(request.POST['nextwork']) > 0:
        nextwork = request.POST['nextwork']
        showid.nextwork = nextwork
    else:
        showid.nextwork = showid.nextwork


    if len(request.POST['description']) > 0:
        description = request.POST['description']
        showid.description = description
    else:
        showid.description = showid.description


    if len(request.POST ['release_date']) > 0:
        release_date = request.POST['release_date']
        showid.release_date = release_date
    else:
        showid.release_date = showid.release_date

    showid.save()
    return redirect(f'/showinfo/{showid.id}')

def delete(request, delete_show):
    delete_show = Show.objects.get(id=delete_show)
    delete_show.delete()
    return redirect('/shows')