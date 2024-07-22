from django.shortcuts import render

# Create your views here.
def home(request):
    fff=55
    
    return render(request, 'main/home.html', {'fff':fff})



def barcode_scanner(request):
    return render(request, 'main/barcode_scanner.html')

def barcode_scannergemini(request):
    return render(request, 'main/barcode_scannergemini.html')


def tracking(request):
        
    return render(request, 'main/tracking.html', {})

def branches(request):
        
    return render(request, 'main/branches.html', {})

def faq(request):
        
    return render(request, 'main/FAQ.html', {})

def express(request):
        
    return render(request, 'main/express.html', {})

def forwarding(request):
        
    return render(request, 'main/forwarding.html', {})

