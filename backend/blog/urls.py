from django.urls import path, re_path
from blog import views

urlpatterns = [
    path('list/', views.ListPosts.as_view(), name="list"),
    re_path('list/(?P<pk>\d+)$', views.SinglePost.as_view(), name="sigle_list_post"), 
    
]