import os
import time
import sys
import Adafruit_DHT as dht
import requests

hostname = "http://localhost"
port = "3000"
api = "/data/temp"
data_store_url = hostname+":"+port+api

while True:
	h,t = dht.read_retry(dht.DHT22, 4)
	print("Temp={0:0.1f}*C Humidity={1:0.1f}%".format(t, h))
	dht_data={}
	dht_data['temp']=t
	dht_data['humidity']=h
	res = requests.post(data_store_url, data=pr_json)