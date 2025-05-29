from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
# Register your models here.

admin.site.register(MyUser, UserAdmin)
admin.site.register(GAPStaff)
admin.site.register(SRCReps)
admin.site.register(Content)
admin.site.register(GlossaryTerms)
admin.site.register(KeyDates)
