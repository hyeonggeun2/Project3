from django.contrib import admin

# Register your models here.

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_per_page = 5
    list_display = (
        'id', 'username', 'is_staff', 'grade'
    )
    list_editable = ('is_staff', 'grade')
    list_filter = ('is_staff', )
    search_fields = ('username', )
    fields = ['is_staff', 'is_active', 'grade']
    readonly_fields = ['name', 'email', 'phone']
