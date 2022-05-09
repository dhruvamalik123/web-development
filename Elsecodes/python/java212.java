import java.util.HashSet;
import java.util.Set;
public class java212 {
	public static void main(String[] args) {
		Set set1 = new HashSet();
        System.out.println("+++++++++++++++++++++++++++++++");
		set1.add(3976);
		set1.add(3977);
		set1.add(3978);
		set1.add(3979);
		set1.add(3980);
		System.out.println(set1.size());
		System.out.println(set1);
		System.out.println(set1.remove(3979));
		System.out.println(set1.remove(3981));
		System.out.println(set1.size());
		System.out.println("+++++++++++++++++++++++++++++++");
		
		Set set2 = new HashSet();
		set2.add(3976);
		set2.add(3977);
		set2.add(3978);
		set2.add(3979);
		set2.add(3980);
		System.out.println(set2.size());
		System.out.println(set2);
		System.out.println(set2.remove(3979));
		System.out.println(set2.remove(3980));
		System.out.println(set2.size());
		boolean result2 = set1.equals(set2);  
	    if(result2) {  
	        System.out.println("Set1 and Set2 are equal.");  }
        else {  
	        System.out.println("Set1 and Set2 are not equal.");  
	        }  
	}
}
