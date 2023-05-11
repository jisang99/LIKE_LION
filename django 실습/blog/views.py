from django.shortcuts import render, get_object_or_404
from .models import Post

# Create your views here.
def index(request):
    posts = Post.objects.all()
    return render(request, "index.html", {'posts':posts})

def detail(request, post_id):
    post_detail = get_object_or_404(Post, pk=post_id)
    return render(request, "detail.html", {"post_detail" : post_detail})