from django.shortcuts import render
from django.shortcuts import get_object_or_404
# from django.db.models import Q
from django.contrib.auth.models import User, Group
from django.views.generic import TemplateView, CreateView, ListView
from rest_framework import viewsets, generics, views
from rest_framework.response import Response
from blog.serializers import UserSerializer, GroupSerializer, PostsSerializer
from blog.models import Posts, Comments
from blog.forms import PostsForm


# DJANGO REST API Views
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


class SinglePostViewSet(views.APIView):
    """
    API endpoint that allows single to be viewed or edited.
    """
    def get(self, request, pk):
        post = get_object_or_404(Posts, pk)
        serializer = PostsSerializer(post)
        return Response(serializer.data)


# Create your views here.
# class indexView(CreateView):
#     template_name = 'index.html'
#     form_class = PostsForm
#     success_url = '/api/'


# class PostViewList(ListView):
#     model = Posts
#     context_object_name = 'post_view_context'
#     template_name = 'posts_list.html'

# Combining IndexView and PostViewList
def indexView(request):
    if request.method == 'POST':
        form = PostsForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = PostsForm()

    qs = Posts.objects.all()
    context = {'form': form, 'posts_list': qs, }
    return render(request, 'index.html', context)
