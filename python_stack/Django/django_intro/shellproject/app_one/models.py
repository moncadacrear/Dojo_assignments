from django.db import models

# Create your models here.
class Game (models.Model):
    title = models.CharField(max_length= 45)
    description_game = models.CharField(max_length =500)
    game_rating = models.IntegerField()
    fun_game = models.BooleanField()
    create_at =models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)