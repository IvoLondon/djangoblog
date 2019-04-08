from django.urls import path
from blog import views

urlpatterns = [
    path('list/', views.ListPosts.as_view(), name="list"),
]