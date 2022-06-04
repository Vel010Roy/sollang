from django.db import models

class Store(models.Model):
    id = models.AutoField(primary_key=True) #Pk 생성
    name = models.TextField(max_length=120)
    address = models.TextField(max_length=120)
    opentime = models.IntegerField()
    closetime = models.IntegerField()
    price = models.IntegerField()
    score_price = models.IntegerField()
    score_facility = models.IntegerField()
    score_hygiene = models.IntegerField()
    rate = models.IntegerField()