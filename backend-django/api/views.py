from django.http import JsonResponse, HttpResponse
from .models import Project, About
from datetime import datetime

# Create your views here.
def projects(request):
    projects = list(Project.objects.values())
    return JsonResponse(projects, safe=False)

def about(request):
    about = list(About.objects.values())
    return JsonResponse(about, safe=False)

def index(request):
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
            <p>The current time is { now }.</p>
        </body>
    </html>
    '''
    return HttpResponse(html)