from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    pub_date = models.DateTimeField()
    body = models.TextField()
    photo = models.ImageField(upload_to='blog/', null=True, blank=True)

    def __str__(self):
        return self.title