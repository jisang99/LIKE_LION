from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    major=models.CharField(max_length=50)
    grade=models.CharField(max_length=50)
    age=models.CharField(max_length=50)