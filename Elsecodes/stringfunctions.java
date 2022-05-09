import java.util.*;
public class stringfunctions
{
public static void main(String[] args)
{
List <String> strList= new ArrayList<String>();
Scanner sc = new Scanner(System.in);
int choice=0;
while(choice != 5)
{
choice =0;
System.out.println("#####MENU######\n");
System.out.println("1.Insert Element into the List\n");
System.out.println("2.Delete Element from the List\n");
System.out.println("3.Display Elements of the List\n");
System.out.println("4.Search Element in the List\n");
System.out.println("5.Exit\n");
choice = sc.nextInt();
sc.nextLine();
switch(choice)
{
case 1:
System.out.println("Enter the element to add\n");
String toAdd=sc.nextLine();
strList.add(toAdd);
break;
case 2:
System.out.println("Enter the element to delete\n");
String toDel = sc.nextLine();
strList.remove(toDel);
break;
case 3:
System.out.println("Elements in the list are:" +strList);
break;
case 4:
System.out.println("Enter the element to Search in the list\n");
String toSearch = sc.nextLine();
if (strList.contains(toSearch))
{
System.out.println("Search Operation says that the element is in the list: "+strList);
}
else
{
System.out.println("Search Operation says that the element is not in the list: "+strList);
}
break;
case 5:
choice =5;
break;
}
}
}
}
