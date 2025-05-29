from django.db import models
from django.contrib.auth.models import AbstractUser

# default Django user model
class MyUser(AbstractUser):
    pass

    def __str__(self):
        return self.username

## CONTACT SCREEN MODELS

# Adviser of studies
class AdviserOfStudies(models.Model):
    adviser_description = models.TextField()
    mycampus_link = models.URLField()
    mycampus_image = models.ImageField()

    def __str__(self):
        return self.adviser_description

# stores GAP staff info for contacts screen
class GAPStaff(models.Model):
    title = models.CharField(max_length=50)
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=255, default="email@email.com")

    def __str__(self):
        return self.name

# stores Student rep contact info for contacts screen
class SRCReps(models.Model):
    rep_title = models.CharField(max_length=50)
    rep_email = models.EmailField(default="email@email.com")

    def __str__(self):
        return self.rep_title

# stores glossary terms for the glossary screen
class GlossaryTerms(models.Model):
    term_category = models.CharField(max_length=1) # the letter the term begins with - this will be used to group data in the frontend
    term_string = models.CharField(max_length=255)
    definition = models.TextField()

    def __str__(self):
        return self.term_string

# stores deadlines for the deadline screen
class KeyDates(models.Model):
    item_description = models.CharField(max_length=255)
    date = models.CharField(max_length=10)

    def __str__(self):
        return self.item_description

# stores to do list items for the to do list
class ToDoList(models.Model):
    list_item = models.CharField(max_length=255)

# screens in the application
class Screen(models.Model):
    screen_name = models.CharField(max_length=255)

    def __str__(self):
        return self.screen_name

class Content(models.Model):
    TEXT = 'text'
    LINK = 'link'
    IMAGE = 'image'

    CONTENT_TYPES = [
        (TEXT, 'text'),
        (LINK, 'link'),
        (IMAGE, 'image'),
    ]

    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    section_name = models.TextField()
    content_name = models.CharField(max_length=255)
    content_type = models.CharField(max_length=10, choices=CONTENT_TYPES)
    text_content = models.TextField(blank=True, null=True)
    link_content = models.URLField(blank=True, null=True)
    image_content = models.ImageField(blank=True, null=True)

