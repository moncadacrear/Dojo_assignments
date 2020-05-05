from django.shortcuts import render,redirect

# Create your views here.


def index(request):
    if "quantity" not in request.session:
        request.session['quantity']= 0
    if "charged" not in request.session:
        request.session['charged'] = 0
    if "totalamount" not in request.session:
        request.session['totalamount'] = 0
    if "totalcost" not in request.session:
        request.session['totalcost'] = 0
    return render(request , "index.html")


def charge(request):
    print("-"*50)
    quantity = int(request.POST['quantity'])
    item_number = int(request.POST ['product_id'])
    request.session['quantity'] += quantity
    request.session['charge'] = item_number
    
    if request.session['charge'] ==  1015:
        request.session['charge'] =  19.99

    if request.session ['charge'] == 1016:
        request.session['charge'] =  29.99

    if request.session ['charge'] == 1017:
        request.session['charge'] =  4.99

    if request.session ['charge'] == 1018:
        request.session['charge'] =  49.99

    request.session['totalcost'] = request.session['charge']* quantity 

    request.session['totalamount'] += request.session['charge']* quantity

    print("-"*50)
    return redirect('/checkout')

def checkout(request):
    return render(request, "checkout.html")

def delete(request):
    request.session.flush()
    return redirect('/checkout')