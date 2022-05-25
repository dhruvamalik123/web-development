import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;
public class FinalPractical {
   public static void main(String[] args) {
      Hashtable table_hash = new Hashtable();
      table_hash.put("3975", "Abhimanyu");
      table_hash.put("3976", "Dhruva");
      table_hash.put("3977", "Aman");
      table_hash.put("3986", "Shubh");
      table_hash.put("4000", "Kaustubh");
      table_hash.put("4352", "Mann");
      System.out.println("Hash Map");
      Iterator<Map.Entry<Integer, String>> iterator = table_hash.entrySet().iterator();
      Map.Entry<Integer, String> entry = null;
      while(iterator.hasNext()){
      entry = iterator.next();
      System.out.println( entry.getKey() + "->" + entry.getValue() );
}
      Enumeration enu = table_hash.keys();
      System.out.println("View of Keys From Hash Table");
      while (enu.hasMoreElements()) {
         System.out.println(enu.nextElement());
      }
   }
}