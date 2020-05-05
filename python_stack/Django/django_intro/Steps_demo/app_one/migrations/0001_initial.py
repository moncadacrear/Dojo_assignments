# Generated by Django 2.2.4 on 2020-04-21 19:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Nemesis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alias', models.CharField(max_length=100)),
                ('weakness', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Power',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('weakness', models.CharField(max_length=45)),
                ('from_equipment', models.BooleanField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Superhero',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alias', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('nemesiss', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nemeses', to='app_one.Nemesis')),
                ('super_power', models.ManyToManyField(related_name='heros', to='app_one.Power')),
            ],
        ),
        migrations.AddField(
            model_name='nemesis',
            name='evil_powers',
            field=models.ManyToManyField(related_name='bad_guys', to='app_one.Power'),
        ),
    ]
