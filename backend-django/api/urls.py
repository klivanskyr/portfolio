from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.projects, name='projects'),
    path('about/', views.about, name='about'),
    path('', views.index, name='index'),
]