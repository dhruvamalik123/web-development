import java.util.Scanner;
abstract class Account
{
    double Interest_Rate;
    double Amount; 
    abstract double Calculate_Interest(double Amount)throws InvalidMonthsException,InvalidAgeException,InvalidAmountException ,InvalidDaysException;
}
class RDaccount extends Account 
{
    double Rd_Interest_Rate;
    double Rd_Amount;
    int Number_of_Months;
    double Monthly_Amount;
    double General, Senior_Citizen;
    Scanner Rd_Scanner = new Scanner(System.in);
    double Calculate_Interest(double RAmount) throws InvalidMonthsException,InvalidAmountException ,InvalidAgeException 
    {
        this.Rd_Amount = RAmount;
        System.out.println("Enter the number RD months :: ");
        Number_of_Months = Rd_Scanner.nextInt();
        System.out.println("Enter the Age of RD Holder :: ");
        int age = Rd_Scanner.nextInt();
        if (Rd_Amount < 0) 
        {
            throw new InvalidAmountException();
        }
        if(Number_of_Months<0)
        {
            throw new InvalidMonthsException();
        }
        if(age<0)
        {
            throw new InvalidAgeException();
        }
        if (Number_of_Months >= 0 && Number_of_Months <= 6) 
        {
            General = .0750;
            Senior_Citizen = 0.080;
        } 
        else if (Number_of_Months >= 7 && Number_of_Months <= 9) 
        {
            General = .0775;
            Senior_Citizen = 0.0825;
        } 
        else if (Number_of_Months >= 10 && Number_of_Months <= 12) 
        {
            General = .0800;
            Senior_Citizen = 0.0850;
        } 
        else if (Number_of_Months >= 13 && Number_of_Months <= 15) 
        {
            General = .0825;
            Senior_Citizen = 0.0875;
        } 
        else if (Number_of_Months >= 16 && Number_of_Months <= 18) 
        {
            General = .0850;
            Senior_Citizen = 0.0900;
        } 
        else if (Number_of_Months >= 22) 
        {
            General = .0875;
            Senior_Citizen = 0.0925;
        }
        Rd_Interest_Rate = (age < 50) ? General : Senior_Citizen;
        return Rd_Amount * Rd_Interest_Rate;
    }
}
class Sb_Account extends Account 
{
    double Sb_Account , Sb_Interest_Rate, Interest;
    Scanner Sb_Scanner = new Scanner(System.in);
    double Calculate_Interest(double Amount) throws InvalidAmountException
    {
        this.Sb_Account = Amount;
        if(Sb_Account < 0 )
        {
            throw new InvalidAmountException();
        }
        System.out.println("Select type of your account \n1. NRI \n2. Normal \n");
        int Account_User_Choice = Sb_Scanner.nextInt();
        switch (Account_User_Choice) 
        {
            case 1:
                Sb_Interest_Rate = .06;
                break;
            case 2:
                Sb_Interest_Rate = .04;
                break;
            default:
                System.out.println("--PLease choose the right type of account !! Try Again !!--");
            }
     return Amount * Sb_Interest_Rate;
    }
}
class FDaccount extends Account 
{
    double Fd_Interest_Rate;
    double Fd_Amount;
    int Number_Of_Days;
    int Age_Of_Account_Holder;
    double General, Senior_Citizen;
    Scanner Fd_Scanner = new Scanner(System.in);
    double Calculate_Interest(double Amount) throws InvalidAgeException,InvalidAmountException ,InvalidDaysException 
    {
        this.Fd_Amount = Amount;
        System.out.println("Enter the number of FD days :: ");
        Number_Of_Days = Fd_Scanner.nextInt();
        System.out.println("Enter the age of FD holder :: ");
        Age_Of_Account_Holder = Fd_Scanner.nextInt();
        if (Amount < 0) 
        {
            throw new InvalidAmountException();
        }
        if(Number_Of_Days<0)
        {
            throw new InvalidDaysException();
        }
        if(Age_Of_Account_Holder<0)
        {
            throw new InvalidAgeException();
        }
        if (Amount < 10000000) 
        {
            if (Number_Of_Days >= 7 && Number_Of_Days <= 14) 
            {
                General = 0.0450;
                Senior_Citizen = 0.0500;
            } 
            else if (Number_Of_Days >= 15 && Number_Of_Days <= 29) 
            {
                General = 0.0470;
                Senior_Citizen = 0.0525;
            } 
            else if (Number_Of_Days >= 30 && Number_Of_Days <= 45) 
            {
                General = 0.0550;
                Senior_Citizen = 0.0600;
            } 
            else if (Number_Of_Days >= 45 && Number_Of_Days <= 60) 
            {
                General = 0.0700;
                Senior_Citizen = 0.0750;
            } 
            else if (Number_Of_Days >= 61 && Number_Of_Days <= 184) 
            {
                General = 0.0750;
                Senior_Citizen = 0.0800;
            } 
            else if (Number_Of_Days >= 185 && Number_Of_Days <= 365) 
            {
                General = 0.0800;
                Senior_Citizen = 0.0850;
            }
            Fd_Interest_Rate = (Age_Of_Account_Holder < 50) ? General : Senior_Citizen;
        } 
        else 
        {
            if (Number_Of_Days >= 7 && Number_Of_Days <= 14) 
            {
                Interest_Rate = 0.065;
            } 
            else if (Number_Of_Days >= 15 && Number_Of_Days <= 29) 
            {
                Interest_Rate = 0.0675;
            } 
            else if (Number_Of_Days >= 30 && Number_Of_Days <= 45) 
            {
                Interest_Rate = 0.00675;
            } 
            else if (Number_Of_Days >= 45 && Number_Of_Days <= 60) 
            {
                Interest_Rate = 0.080;
            } 
            else if (Number_Of_Days >= 61 && Number_Of_Days <= 184) 
            {
                Interest_Rate = 0.0850;
            } 
            else if (Number_Of_Days >= 185 && Number_Of_Days <= 365) 
            {
                Interest_Rate = 0.10;
            }
        }
        return Fd_Amount * Fd_Interest_Rate;
    }
}
 class InvalidAgeException extends Exception
 {

 }
class InvalidAmountException extends Exception
{
    
}
class InvalidDaysException extends Exception
{
    
}
class InvalidMonthsException extends Exception
{
    
}
public class InterestCalculator 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("---Select The options as per your User_Choice---" + "\n1." + " Interest Calculator for SB" + " \n2." + " Interest Calculator-FD"
                + "\n3." + " Interest Calculator for RD" + "\n4 " + " Exit!!" + "\n -------------------------------------------");
        int User_Choice = sc.nextInt();
        switch (User_Choice) 
        {
            case 1:
                Sb_Account sb = new Sb_Account();
                try 
                {
                    System.out.println("Enter the Average SB Amount as per your requirement :: ");
                    double Amount = sc.nextDouble();
                    System.out.println("Interest gained By you is :: $ " + sb.Calculate_Interest(Amount));
                } 
                catch (InvalidAmountException e) 
                {
                    System.out.println("Exception!!! : Invalid Amount Entered !!!");
                }
                break;
                case 2:
                try 
                {
                    FDaccount fd = new FDaccount();
                    System.out.println("Enter the FD Amount as per your requirement :: ");
                    double fAmount = sc.nextDouble();
                    System.out.println("Interest gained By you is :: $ " + fd.Calculate_Interest(fAmount));
                } 
                catch (InvalidAgeException e) 
                {
                    System.out.println("Exception!!! : Invalid Age Entered!!!");
                } 
                catch (InvalidAmountException e) 
                {
                    System.out.println("Exception!!! : Invalid Amount Entered !!!");

                } 
                catch (InvalidDaysException e) 
                {
                    System.out.println("Exception!!! : Invalid Days Entered !!!");

                }
                break;
            case 3:
                try 
                {
                    RDaccount rd = new RDaccount();
                    System.out.println("Enter the RD Amount as per your requirement :: ");
                    double RAmount = sc.nextDouble();
                    System.out.println("Interest gained By you is: $ " + rd.Calculate_Interest(RAmount));
                } 
                catch (InvalidAgeException e) 
                {
                    System.out.println("Exception!!! : Invalid Age Entered !!!");
                }
                catch (InvalidAmountException e) 
                {
                    System.out.println("Exception!!! : Invalid Amount Entered !!!");

                }
                catch (InvalidMonthsException e) {
                    System.out.println("Exception!!! : Invalid Days Entered !!!");
                }
                break;
                case 4:
                System.out.println("DO YOU WANT TO CALCULATE AGAIN ???? If yes , Run the program again " );
            default:
                System.out.println("Wrong Choice by user ");
                sc.close();
            }
        }
    }
