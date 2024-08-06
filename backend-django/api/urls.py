from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.projects, name='projects'),
    path('abouts/', views.abouts, name='abouts'),
    path('experiences/', views.experiences, name='experiences'),
    path('skills/', views.skills, name='skills'),
    path('educations/', views.educations, name='educations'),
    path('testimonials/', views.testimonials, name='testimonials'),
    path('contacts/', views.contacts, name='contacts'),
    path('socials/', views.socials, name='socials'),
    path('resumes/', views.resumes, name='resumes'),
]