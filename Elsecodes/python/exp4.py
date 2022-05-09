import pandas as pd
import numpy as np
companies = pd.read_csv("companies.txt", sep='\t', encoding = 'ISO-8859-1')
rounds2=pd.read_csv('rounds2.csv', encoding='ISO-8859-1')
print(rounds2.shape)#1
print(rounds2.head())#2
print(companies.head())#3
companies ['permalink'] = pd.Series(map(lambda x: x.lower(), companies ['permalink'] ))

rounds2['company_permalink'] = pd.Series(map(lambda x: x.lower(), rounds2['company_permalink']))
print(companies['permalink'].nunique())#4
print(rounds2['company_permalink'].nunique())#5