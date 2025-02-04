from django.http import JsonResponse, HttpResponse
from .models import *
from datetime import datetime
from rest_framework import generics
from .serializers import *

# Create your views here.
class ProjectsList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def abouts(request):
    abouts = list(About.objects.values())
    return JsonResponse(abouts, safe=False)

def experiences(request):
    experiences = list(Experience.objects.values())
    return JsonResponse(experiences, safe=False)

def skills(request):
    skills = list(Skill.objects.values())
    return JsonResponse(skills, safe=False)

def educations(request):
    educations = list(Education.objects.values())
    return JsonResponse(educations, safe=False)

def testimonials(request):
    testimonials = list(Testimonial.objects.values())
    return JsonResponse(testimonials, safe=False)

def contacts(request):
    contacts = list(Contact.objects.values())
    return JsonResponse(contacts, safe=False)

def socials(request):
    socials = list(Social.objects.values())
    return JsonResponse(socials, safe=False)

def resumes(request):
    resumes = list(Resume.objects.values())
    return JsonResponse(resumes, safe=False)

