import java.util.Scanner;

public class labmst {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        int n = 50;
        String uid[] = new String[50];
        String className[] = new String[50];
        String enrollStatus[] = new String[50];
        int[] Marklist = new int[5];
        int sum = 0;
        int Marks[] = new int[50];
        int i = 0;
        int m =0;


        do {
            System.out.println("----------Student's Information------------");
            System.out.println("1.Add information of the Student ");
            System.out.println("2.Display Information of All Student ");
            System.out.println("3.Find Student with highest marks with Status as Active  ");
            System.out.println("4.Exit!!!");
            System.out.println("---------------------------------------------");

            System.out.println("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Enter the uid of the student :: ");
                    uid[i] = sc.next();
                    System.out.println("Enter name of the student :: ");
                    className[i] = sc.next();
                    System.out.println("Enter the enroll status of the student ::  ( choose from A-Active NR-Non-Reporting & PD-Pending Dues )   :: ");
                    enrollStatus[i] = sc.next();
                    System.out.println("Enter marks of students in each subjects :: ");
                    for (int j = 0; j < 5; j++) {
                        System.out.println("Enter the marks of " + (j + 1) + " subject :: ");
                        Marklist[j] = sc.nextInt();
                        sum = sum + Marklist[j];
                    }
                    Marks[i] = sum;
                    sum=0;
                    i++;
                    break;
                    case 2:
                    System.out.println(" ------ Information of the Students ------");
                    System.out.println(" UID \t\t className \t Status \t Total Marks");
                    for (int j = 0; j < i; j++) {
                        System.out.print(uid[j] + " \t " + className[j] + " \t\t " + enrollStatus[j] + " \t\t" + Marks[j]);
                        System.out.println();
                    }
                    break;
                case 3:
                    int[] tempmarks = new int[i];
                    String[] tempname = new String[i];
                    for(int k=0;k<i;k++){
                        if(enrollStatus[k].equals("A")){
                            tempmarks[m]=Marks[k];
                            tempname[m]=className[k];
                            m++;
                        }
                    }
                    int max=0;
                    for(int l=0;l<=m;l++){
                        if(tempmarks[l]>max){
                            max=tempmarks[l];
                        }
                    }
                    for(int z=0;z<=m;z++){
                        if(max==tempmarks[z]){
                            System.out.println("Student with highest marks and active status is :: ");
                            System.out.println(tempname[z]);
                            System.out.println("marks");
                            System.out.println(tempmarks[z]);
                        }
                    }

                    break;
                case 4:
                    System.exit(0);
                    break;
                default:
                    System.out.println("Please enter a correct choice.");
                    break;

            }
        }
        while (true);
    }
}
                