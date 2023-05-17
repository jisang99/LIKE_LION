from django.urls import path
from blog import views

urlpatterns = [
    path('', views.index, name="index"),
    path('detail/<int:post_id>', views.detail, name="detail"),
    path('create', views.create, name="create"),
    path('update/<int:post_id>', views.update, name="update"),
    path('delete/<int:post_id>', views.delete, name="delete"),
]