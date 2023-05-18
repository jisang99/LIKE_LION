from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from django.utils import timezone

# Create your views here.
def index(request):
    posts = Post.objects.all()
    return render(request, "index.html", {'posts':posts})

def detail(request, post_id):
    post_detail = get_object_or_404(Post, pk=post_id)
    return render(request, "detail.html", {"post_detail" : post_detail})

def create(request):
    if request.method == 'POST':
        post=Post()
        post.title=request.POST['title']
        post.body=request.POST['body']
        post.pub_date=timezone.datetime.now()
        post.photo = request.FILES['photo']
        post.save()
        return redirect("/detail/"+str(post.id))
    else:
        return render(request, 'create.html')
    
def update(request, post_id):
    post = Post.objects.get(id=post_id)
    if request.method == 'POST':
        post.title=request.POST['title']
        post.body=request.POST['body']
        post.pub_date=timezone.datetime.now()
        post.save()
        return redirect('/detail/'+str(post.id))
    else:
        return render(request, 'update.html', {'post':post})
    
def delete(request, post_id):
    post = Post.objects.get(id=post_id)
    post.delete()
    return redirect('index')