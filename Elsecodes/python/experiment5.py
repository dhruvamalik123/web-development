dictionary={"Dhruva":"05/03/2003","Ketan":"24/05/2002","Paylo":"12/05/2003","Aditi":"17/12/1992","Nishit":"30/7/1998"}
query=input("To search enter Date in format dd-mm-yyyy ::")
query=query.split("-")
query="/".join(query)
print(query)
flag=0
for key,value in dictionary.items():
    if value==query:
        flag=1
        break
if flag==1:
    print("The birth date",query,"has been found in the dictionary and person is",key)
else:
    print("No person has been found in the dictionary corresponding to the birth date",query)
    