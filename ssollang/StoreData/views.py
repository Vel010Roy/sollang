from django.shortcuts import render
from django.http import HttpResponse


from .models import Store

def index(request):

    return render(request, 'StoreData/index.html')
