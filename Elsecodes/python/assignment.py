roll_number=input("Enter Roll number :: ")
percentage=float(input("Enter Precentage(%) :: "))
if percentage>=80:
    print("Roll no :",roll_number,"is given section A")
elif percentage<80 and percentage>=70:
    print("Roll no :",roll_number,"is given section B")
elif percentage<70 and percentage>=60:
    print("Roll no :",roll_number,"is given section C")
else:
    print("Section to roll no :",roll_number,"not been alloted any section")