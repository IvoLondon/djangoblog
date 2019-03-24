from django.contrib.auth.models import User, Group
from blog.models import Posts
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class PostsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posts
        fields = ('title', 'author', 'text', 'id', )


# class SinglePostSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Posts
#         fields = ('title', 'author', 'text', 'id', )