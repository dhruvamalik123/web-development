import java.util.Scanner;

class Video{
    String Name_of_video;
    Boolean check_out = true;
    int rating = 0;

    boolean check_out(){
        //check_out
        return check_out;
    }
    void renting_of_video(){
        check_out = false;
    }

}
class VideoStore extends Video{
    Video[] store = new Video[10];
    int i = 0;
    void add_video(String name){
        store[i] = new Video();

        Name_of_video =  name;
        store[i].Name_of_video = name;
        i++;
        System.out.println("--- Video has been added succesfully to the video database ---");
    }

    void check_out(String name)
    {
        for (int k = 0; k < i; k++)
        {
            if (store[k].Name_of_video.equalsIgnoreCase(name)) {
                if (store[k].check_out()) {
                    store[k].renting_of_video();
                    System.out.println("This Video has been rented ");
                }
                else {
                    System.out.println("THe video has been rented by a customer , sorry it is not available ");
                }
            }
        }
    }
    void returnVideo(String name) {
        if (i == 0)
        {
            System.out.println("No Video is available to be returned");
        }
        for (int j = 0; j < i; j++)
        {
            if (store[j].Name_of_video.equalsIgnoreCase(name)) {
                store[j].check_out = true;
                System.out.println("Video has been Returned successfully");
            }
        }

    }
    public void Record_Rating()
    {
        if (i == 0) {
            System.out.println("No Video in the Database");
        }
        else {
            for (int j = 0; j < i; j++)
            {
                System.out.println("Enter rating for the movie :: " + store[j].Name_of_video);
                Scanner sc = new Scanner(System.in);
                store[j].rating = sc.nextInt();
            }
        }
    }
    public void list_videos() {
        if (i == 0)
        {
            System.out.println("No Video available in the database");
        }
        else
        {
            for (int k = 0; k < i; k++)
            {
                System.out.println("S.no    "+" Name "+" "+ "Ratings "+" Availability ");
                System.out.println(k + 1 + ".    " + store[k].Name_of_video  +"  \t"+
                        store[k].rating  +" \t"+ store[k].check_out());
            }
        }
    }
}
public class java2 {
    


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        VideoStore vs = new VideoStore();
        int uCh;
        String title, choice;
        do{
            System.out.println("--------- Main Menu ---------");
            System.out.println("1. List Inventory");
            System.out.println("2. Rent Video");
            System.out.println("3. Enter the rating of Video");
            System.out.println("4. Return Video");
            System.out.println("5. Add Video");
            System.out.println("----------------------------");
            uCh = sc.nextInt();
            if (uCh == 1)
            {
                vs.list_videos();
            }
            else if (uCh == 2)
            {
                vs.list_videos();
                System.out.println("Enter the video Name you want");
                title = sc.next();
                vs.check_out(title);
            }
            else if (uCh == 3) {
                vs.Record_Rating();
            }
            else if (uCh == 4)
            {
                System.out.println("Enter  Movie you want to return ");
                String ret = sc.next();
                vs.returnVideo(ret);
            }
            else if (uCh == 5)
            {
                System.out.println("Enter the name of Video");
                title = sc.next();
                vs.add_video(title);
            }
            else
            {
                System.out.println("No such Option is available");
            }

            System.out.println("Do you want to return to the Main Menu (yes/no) ");
            choice = sc.next();
        }while (choice.equalsIgnoreCase("yes"));
    }
}