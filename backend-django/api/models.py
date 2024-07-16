from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    imageUrl = models.URLField(blank=True)
    linkUrl = models.URLField(blank=True)

    def __str__(self):
        return self.title

class About(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    imageUrl = models.URLField(blank=True)

    def __str__(self):
        return self.firstName + " " + self.lastName