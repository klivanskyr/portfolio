from django.urls import path
from .views import *

urlpatterns = [
    path('projects/', ProjectsList.as_view(), name='projects'),
    path('abouts/', abouts, name='abouts'),
    path('experiences/', experiences, name='experiences'),
    path('skills/', skills, name='skills'),
    path('educations/', educations, name='educations'),
    path('testimonials/', testimonials, name='testimonials'),
    path('contacts/', contacts, name='contacts'),
    path('socials/', socials, name='socials'),
    path('resumes/', resumes, name='resumes'),
]