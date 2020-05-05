from django.db import models

# Create your models here.

class Dojo(models.Model):
    name = models.CharField(max_length = 255)
    city = models.CharField(max_length = 255)
    state = models.CharField(max_length = 255)
    desc = models.TextField(default="old dojo")
    create_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now= True)
    #ninjas= models.ForeignKey(Ninja, related_name = "dojo" , on_delete = models.CASCADE)


class Ninja (models.Model):
    name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length= 255)
    dojo = models.ForeignKey(Dojo, related_name="ninjas", on_delete = models.CASCADE)
    create_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now= True)

