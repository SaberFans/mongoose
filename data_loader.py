import requests
import pandas as pd
from pandas import ExcelFile
import math

hostname = "http://localhost"
port = "3000"
data_store_url = hostname+":"+port+"/data/hprice"
data_path = "house_price_per_year.xlsx"
row_num = 20
 
xl = pd.ExcelFile(data_path)
print(xl.sheet_names)
parsed = xl.parse(xl.sheet_names[0])

print("Column headings:", parsed.columns)

areas = list(parsed.columns[1:])

prices = []

for index, row in parsed.iterrows():
	row_ls = list(row)
	year = row_ls[0]
	# break if no more data
	if math.isnan(year):
		break
	for index, row in enumerate(row_ls[1:]):
		pr_json = {}
		pr_json['area'] = areas[index]
		pr_json['year'] = year
		pr_json['price'] = row
		res = requests.post(data_store_url, data=pr_json)
		
