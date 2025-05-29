from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

class RegisterMyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['username','password',]

        extra_kwargs = {
            'password' : {'write_only': True}
        }
    
    def create(self, validated_data):
        user = MyUser(
            username=validated_data['username'],

        )

        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginMyUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    # email=serializers.EmailField()
    # first_name=serializers.CharField()
    # last_name=serializers.CharField()
    password=serializers.CharField(write_only=True)

    def validate(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']

        if username and password:
            user = authenticate(username=username, password=password)

            if user:
                if not user.is_active:
                    raise serializers.ValidationError("Invalid account")
            else: 
                raise serializers.ValidationError("Invalid credentials")
        else: 
            raise serializers.ValidationError("Username and password are both required.")
        
        return validated_data

class GAPStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = GAPStaff
        fields = ['title', 'name', 'email']

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['content_name', 'text_content', 'link_content', 'image_content']

class SRCRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = SRCReps
        fields = ['rep_title', 'rep_email']

class GlossarySerializer(serializers.ModelSerializer):
    class Meta:
        model = GlossaryTerms
        fields = ['term_category', 'term_string', 'definition']

class KeyDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model=KeyDates
        fields=['item_description', 'date']

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model=ToDoList
        fields=['list_item']

class ResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Content
        fields=['section_name', 'link_content']


