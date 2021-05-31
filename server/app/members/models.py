from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = (
        ('male', 'male'),
        ('female', 'female'),
    )
    name = models.CharField(max_length=30)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=30)
    address = models.CharField(max_length=100)

    # admin page에서 표시 될 값들.
    GRADE_CHOICES = (
        ('bronze', 'bronze'),
        ('silver', 'silver'),
        ('gold', 'gold'),
        ('platinum', 'platinum'),
        ('diamond', 'diamond'),
    )
    grade = models.CharField(
        verbose_name='등급',
        max_length=15, choices=GRADE_CHOICES, default='bronze')

    is_staff = models.BooleanField(
        verbose_name='관리자 권한',
        default=False,
        help_text='관리자 권한을 주려면 체크하세요.',
    )
    is_active = models.BooleanField(
        verbose_name='활성 / 차단',
        default=True,
        help_text='유저를 활성하려면 체크, 차단하려면 체크를 해제하세요.',
    )


