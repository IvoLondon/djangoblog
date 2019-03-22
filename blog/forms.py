from django import forms
from blog import models


class PostsForm(forms.ModelForm):

    class Meta():
        model = models.Posts
        fields = ('title', 'text', 'author')

        widgets = {
            'title': forms.Textarea(attrs={'class': 'postcontent'})
        }