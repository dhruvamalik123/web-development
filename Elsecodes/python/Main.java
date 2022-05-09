public class Main
{

     public static void main(String[] args)
     {
       
     Thread tortoise = new Tortoise();        //Creating an object of the tortoise  thread
     tortoise.start();                         //Starting the first thread
     for(int a=1;a<21;a++)
            {

              System.out.println("Distance by Hare :: "+(a));  
            }

    System.out.println("----------------HARE WILL NOW GO TO SLEEP---------------");   //hare going to sleep

    try
    {
      Thread.sleep(3000);                           // current thread is hare
    }
    catch(InterruptedException ie)
    {
   
    }

    System.out.println("-----------------HARE STARTED THE RACE AGAIN---------------");           //hare wakes up

    for(int b=21;b<40;b++)
      System.out.println("Distance by Hare ::  "+(b));
    System.out.println("-----------------THE RACE HAS BEEN COMPLETED BY HARE ------------------");
 

  }
}

class Tortoise extends Thread
{  
    public void run()
    {
                for(int c=1;c<41;c++)
                {
                  System.out.println("Distance by tortoise :: "+c);    
                }
                System.out.println("---------------THE RACE HAS BEEN WON BY TORTOICE ------------");     // tortoise won the race
 
  }
   
}
