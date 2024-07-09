from django.http import JsonResponse
from .models import Project

# Create your views here.
def projects(request):
    projects = list(Project.objects.values())
    return JsonResponse(projects, safe=False)