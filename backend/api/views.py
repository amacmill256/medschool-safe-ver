from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework import authentication, permissions, generics
from .models import *
from .serializers import *


class LoginView(APIView):
    def post(self, request):
        serializer = LoginMyUserSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            # email = serializer.validated_data['email']
            # first_name = serializer.validated_data['first_name']
            # last_name = serializer.validated_data['last_name']
            password = serializer.validated_data['password']

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterMyUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Page content model
class SectionContentView(generics.ListAPIView):
    serializer_class=ContentSerializer

    def get_queryset(self):
        section_name = self.request.query_params.get('section', None)
        if section_name:
            return Content.objects.filter(section_name=section_name)
        else:
            return Content.objects.none()
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

# USEFUL CONTACTS

class GAPStaffView(generics.ListAPIView):
    queryset = GAPStaff.objects.all()
    serializer_class = GAPStaffSerializer

class SRCRepsView(generics.ListAPIView):
    queryset = SRCReps.objects.all()
    serializer_class = SRCRepSerializer

# GLOSSARY

class GlossarySectionView(generics.ListAPIView):
    serializer_class=GlossarySerializer

    def get_queryset(self):
        section_name = self.request.query_params.get('section', None)
        if section_name:
            return GlossaryTerms.objects.filter(term_category=section_name)
        else:
            return GlossaryTerms.objects.none() 

# KEY DATES

class KeyDatesView(generics.ListAPIView):
    queryset = KeyDates.objects.all()
    serializer_class=KeyDatesSerializer

# TO DO

class ToDoListView(generics.ListAPIView):
    queryset = ToDoList.objects.all()
    serializer_class= ToDoSerializer

# RESOURCES

class ResourcesView(generics.ListAPIView):
    def get_queryset(self):
        screen = get_object_or_404(Screen, screen_name='Useful Resources')
        return Content.objects.filter(screen=screen)
    serializer_class = ResourcesSerializer

