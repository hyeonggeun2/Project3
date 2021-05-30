from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = (
        ('male', 'male'),
        ('female', 'female'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=30)
    GRADE_CHOICES = (
        ('bronze', 'bronze'),
        ('silver', 'silver'),
        ('gold', 'gold'),
        ('platinum', 'platinum'),
        ('diamond', 'diamond'),
    )
    grade = models.CharField(max_length=15, choices=GRADE_CHOICES, default='bronze')
