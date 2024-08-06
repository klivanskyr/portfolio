from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)
    linkUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.title

class About(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.firstName + " " + self.lastName
    
class Experience(models.Model):
    position = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    startDate = models.DateField()
    endDate = models.DateField(blank=True, null=True, default=None)
    description = models.TextField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.position + " at " + self.company

class Skill(models.Model):
    name = models.CharField(max_length=100)
    projects = models.ManyToManyField(Project, blank=True)
    experiences = models.ManyToManyField(Experience, blank=True)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name

class Education(models.Model):
    degree = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    startDate = models.DateField()
    endDate = models.DateField(blank=True, null=True, default=None)
    description = models.TextField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.degree + " at " + self.school
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name + " - " + self.title
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name + " - " + self.subject

class Social(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(blank=True, null=True, default=None)
    imageUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name
    
class Resume(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True, default=None)
    fileUrl = models.URLField(blank=True, null=True, default=None)

    def __str__(self):
        return self.title
    
