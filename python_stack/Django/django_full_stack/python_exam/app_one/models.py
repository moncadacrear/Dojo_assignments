from django.db import models
import re, bcrypt

# Create your models here.
class UserManager(models.Manager):
    def login_validator(self,formData):
        errors = {}
        user = User.objects.filter(email = formData["email"])
        if user:
            logged_user = user[0]
            if bcrypt.checkpw(formData['password'].encode(), logged_user.password.encode()):
                return errors
            else:
                errors['incorrect_pass'] = "wrong password  it doesnt match with email"
        errors['no_email'] = "no email match "
        return errors



    def user_val(self,formData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(formData['first_name']) < 3:
            errors ['first_name'] = " First name It has to be longer then 3 characters please"
        if len(formData['last_name']) < 3:
            errors['last_name'] = " Last name it must be longer then 3  characters "
        if not EMAIL_REGEX.match(formData['email']):           
            errors['email'] = "Invalid email address!"
        if len(formData ['password']) < 8:
            errors['passowrd_length'] = "Your password must be at least 8 characters or longer"
        if formData['password'] != formData['confirm']:
            errors['pass_confirm'] = " the password does not match with the confirm one "
        return errors 


class TripManager(models.Manager):
    def trip_validator(self, formData):
        errors= {}
        destination = formData['destination']
        start_date = formData ['start_date']
        end_date = formData['end_date']
        plan = formData['plan']
        if len(destination) < 3:
            errors['destination'] = "Please put a right destination "
        if len(start_date) < 1:
            errors['start_date'] = "Put a correct date on Start Date"
        if len(end_date) < 1 :
            errors ['end_date'] = "Put a correct date on the End Date"
        if len(plan) <= 5 :
            errors['plan'] = "give more information about your plan at least in 5 characters"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField( max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    #tr



class Trip(models.Model):
    destination = models.CharField(max_length= 255)
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.TextField()
    user = models.ForeignKey(User, related_name="trips", on_delete= models.CASCADE)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripManager()