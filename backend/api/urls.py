from django.urls import path
from .views import *

# API Endpoints

urlpatterns = [
    # path('login/', LoginView.as_view(), name='login'),
    # path('register/', RegisterView.as_view(), name='register'),
    path('GAPStaff/', GAPStaffView.as_view(), name='GAPStaff'),
    path('content/', SectionContentView.as_view(), name='section_content'),
    path('SRCReps/', SRCRepsView.as_view(), name='SRCReps'),
    path('glossary-terms/', GlossarySectionView.as_view(), name='glossary'),
    path('key-dates/', KeyDatesView.as_view(), name='key_dates'),
    path('todo/', ToDoListView.as_view(), name='ToDo'),
    path('resources/', ResourcesView.as_view(), name='resources'),

]