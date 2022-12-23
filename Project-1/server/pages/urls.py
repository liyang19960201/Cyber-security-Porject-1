from django.urls import path

from .views import homePageView, balanceView, changeUsernameView

urlpatterns = [
    path('', homePageView, name='home'),
    path('balance/', balanceView, name='balance'),
    path('change', changeUsernameView)
]
