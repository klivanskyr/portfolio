from django.http import JsonResponse
from .models import Project, About

# Create your views here.
def projects(request):
    projects = list(Project.objects.values())
    return JsonResponse(projects, safe=False)

def about(request):
    about = list(About.objects.values())
    return JsonResponse(about, safe=False)