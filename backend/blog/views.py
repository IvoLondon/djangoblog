from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.views.generic import TemplateView, CreateView
from rest_framework import viewsets
from blog.serializers import UserSerializer, GroupSerializer, PostsSerializer
from blog.models import Posts, Comments
from blog.forms import PostsForm


# Create your views here.
class indexView(CreateView):
    template_name = 'index.html'
    form_class = PostsForm
    success_url = '/api/'


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class PostsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
