from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Account

def homePageView(request):
	return render(request, 'pages/index.html')

def changeUsernameView(request):
	user = User.objects.get(username='admin')
	user.set_password('admin')
	user.save()
	return render(request, 'pages/index.html')