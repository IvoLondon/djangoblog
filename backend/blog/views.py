from django.shortcuts import render
from django.shortcuts import get_object_or_404
# from django.db.models import Q
from django.contrib.auth.models import User, Group
from django.views.generic import TemplateView, CreateView
from rest_framework import viewsets, generics, views
from rest_framework.response import Response
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

    # def queryset(self, *args, **kwargs):
    #     queryset_list = Posts.objects.all()
    #     query = self.request.GET.get('q')
    #     if query:
    #         queryset_list = queryset_list.filter(
    #             Q(title__icontains=query) |
    #             Q(content__icontains=query)
    #         ).distinct()
    #     return queryset_list


class SinglePostViewSet(views.APIView):
    """
    API endpoint that allows single to be viewed or edited.
    """
    def get(self, request, pk):
        post = get_object_or_404(Posts, pk)
        serializer = PostsSerializer(post)
        return Response(serializer.data)
