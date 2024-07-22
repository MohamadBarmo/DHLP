from django.shortcuts import render
from django.http import HttpResponse
from PIL import Image, ImageDraw
import barcode
from barcode.writer import ImageWriter
import io


# Create your views here.
def home(request):
        
    return render(request, 'dashboard/home.html', {})

def userlogin(request):
     return render(request, 'dashboard/auth_login.html', {})

def sendpck(request):
     return render(request, 'dashboard/sendpck.html', {})

def movepck(request):
     return render(request, 'dashboard/movepck.html', {})

def arrivepck(request):
     return render(request, 'dashboard/arrivepck.html', {})

def manifest(request):
     return render(request, 'dashboard/manifest.html', {})



def generate_barcode(request):
    try:
        # Create a blank white image
        img = Image.new('RGB', (300, 300), color='white')
        draw = ImageDraw.Draw(img)
        
        # Get the barcode data
        barcode_data = "123456789"  # Example data
        
        # Generate the barcode
        code128 = barcode.get_barcode_class('code128')
        barcode_instance = code128(barcode_data, writer=ImageWriter())
        barcode_image = barcode_instance.render()

        # Paste the barcode onto the image
        img.paste(barcode_image, (10, 10))
        
        # Convert image to bytes
        buffer = io.BytesIO()
        img.save(buffer, format='PNG')
        
        # Return the image as HTTP response
        return HttpResponse(buffer.getvalue(), content_type='image/png')
    except Exception as e:
        # Print the error for debugging purposes
        print("Error generating barcode:", e)
        # Return a generic error response
        return HttpResponse("Error generating barcode", status=500)


def page_account_settings(request):
     return render(request, 'dashboard/page_account_settings.html', {})