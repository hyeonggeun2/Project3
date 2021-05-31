from django.contrib import admin

# Register your models here.

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ['is_staff', 'is_active', 'grade']
    readonly_fields = ['name', 'gender', 'email', 'phone']
