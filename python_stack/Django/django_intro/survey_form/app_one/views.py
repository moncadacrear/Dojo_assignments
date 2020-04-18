from django.shortcuts import render,HttpResponse,redirect


def index(request):
    return render (request, "submit.html")
    


def results (request):
    submit_name = request.POST['first_name']
    submit_dojolocation = request.POST['dojo-locations']
    submit_langauge = request.POST ['favorite-languages']
    submit_comments = request.POST ["description"]
    # return render(request , "result.html", context)     #redirect is
    return redirect(f"/process/{submit_name}/{submit_dojolocation}/{submit_langauge}/{submit_comments}")

def process (request, submit_name, submit_dojolocation, submit_langauge,submit_comments):
    context = {
        "name_template" : submit_name,
        "location_template" : submit_dojolocation,
        "langauge_template" : submit_langauge,
        "comments_template" : submit_comments,
    }
    return render(request,"result.html", context)


