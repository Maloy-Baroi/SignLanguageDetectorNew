from django.urls import path
from App_main.views import *

app_name = 'App_main'


urlpatterns = [
    path('', home, name='home'),
    path('speech-to-sign', speech_to_sign, name='speech-to-sign'),
    path('sign-to-text', sign_to_text, name='sign-to-text'),
]

