import java.util.Hashtable;
public class java21 {
	public static void main(String[] args) {
		Hashtable hashtable = new Hashtable();		
		hashtable.put(1,"Dhruva");
		hashtable.put(2,"Kaustubh");
		hashtable.put(3,"Payal");
		hashtable.put(4,"Aman");
		hashtable.put(5, "Ketan");
		System.out.println(hashtable.keys());
		System.out.println(hashtable.containsValue("Payal"));
		System.out.println(hashtable.containsValue("Daksha"));
		System.out.println(hashtable.clone());
		System.out.println(hashtable.hashCode());
		System.out.println(hashtable.remove(4));
		System.out.println(hashtable.remove(5));
		System.out.println(hashtable.remove(6));
		System.out.println(hashtable.clone());
	}
}

