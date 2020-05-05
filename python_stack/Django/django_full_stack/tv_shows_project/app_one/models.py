from django.db import models

# Create your models here.

class ShowManager(models.Manager):
    def show_validator(self, postData):
        errors = {}
        # print(postData)
        # print("im working through the validator")
        title = postData['title']
        nextwork = postData['nextwork']
        release_date = postData['release_date']
        description = postData['description']
        if len(title) <=2:
            errors['title'] = "Title should be at least 2 characters "
        if len(nextwork) <=3:
            errors['nextwork'] = " network should be longer then 3 characters"
        if len(description) <=10:
            errors['description'] = "give me more information"
        return errors



        print("-"*40)
        print(title , nextwork, release_date , description, "hola its working in the models")
        print("-"*40)


class Show(models.Model):
    title = models.CharField(max_length = 255)
    nextwork = models.CharField(max_length = 255)
    release_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects= ShowManager()
