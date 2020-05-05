from django.db import models

# Create your models here.
class Power(models.Model):
    name = models.CharField(max_length = 45)
    weakness = models.CharField(max_length = 45)
    from_equipment = models.BooleanField ()
    created_at = models.DateTimeField(auto_now_add= True)
    update_at = models.DateTimeField(auto_now=True)


class Nemesis (models.Model):
    alias = models.CharField(max_length = 100)
    weakness = models.CharField(max_length = 100)
    evil_powers = models.ManyToManyField(Power, related_name="bad_guys")
    created_at = models.DateTimeField(auto_now_add= True)
    update_at = models.DateTimeField(auto_now=True)

class Superhero(models.Model):
    alias = models.CharField(max_length = 100)
    super_power = models.ManyToManyField(Power, related_name= "heros")
    nemesiss = models.ForeignKey(Nemesis , related_name= 'nemeses', on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add= True)
    update_at = models.DateTimeField(auto_now=True)