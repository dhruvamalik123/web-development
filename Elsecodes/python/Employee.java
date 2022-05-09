import java.io.BufferedReader; 
import java.io.IOException; 
import java.io.InputStreamReader; 
public class Employee 
{    
    String empId;   
    String depName;  
    String empDesignation;  
    String empName;   
    String dateJoin;  
    int basic;  
    int hra;  
    int it;   
    char designationCode; 
    public static int da;   
    public Employee(String empId, String depName, String empDesignation,                     String empName, String dateJoin, int basic, int hra,                     int it, char designationCode) 
    {      
        this.empId = empId;      
        this.depName = depName;    
        this.empDesignation = empDesignation;     
        this.empName = empName;       
        this.dateJoin = dateJoin;      
        this.basic = basic;     
        this.hra = hra;      
        this.it = it;     
        this.designationCode = designationCode;  
    }    
    
    public static int da(char designationCode)
    
    {         
        switch(designationCode)       
        {             
            case 'e': 
                {           
                    da = 20000;      
                    break;        
                }          
            case 'c':
                {   
                    da = 32000;    
                    break;        
                }       
            case 'k':
                {         
                    da = 12000;      
                    break;        
                }         
            case 'r':
                {   
                    da = 15000;          
                    break;       
                }        
            case 'm':
                {      
                    da = 40000;        
                    break;      
                }        
                
                default:           
                throw new IllegalStateException("Unexpected value: " + designationCode);        
            }      
            return da;  
        }   
        public static int salary(int basic,int hra,int da,int it)  
        {      
            int salary = basic+hra+da-it;       
            return salary;  
        }   
        public static void details(String empId,String empName,String depName,String empDesignation,int salary, int da)    
        {     
            System.out.println("Emp Id\t\tEmployee Name\tDepartment\t\tDesignation\t\tSalary\t\tDA");     
            System.out.println(empId+"\t\t"+empName+"\t\t"+depName+"\t\t\t"+empDesignation+"\t\t"+salary+"\t\t"+da);  
        }  
        public  static void  main(String[] args) throws IOException 
        { 
            BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(System.in));      
            String empId;int c=0;      
            Employee[] employees=new Employee[3];     
            employees[0] =new Employee("1001","R&D","Engineer","Dhruva","05/02/2008",10000,7000,1000,'e' );     
            employees[1] =new Employee("1002","HR","Consultant","Payal","20/05/2011",50000,19000,7000,'c');      
            employees[2] =new Employee("1003","Acct","Accountant","Daksh","19/12/2010",15000,6000,2000,'k');    
            System.out.println("Enter the employee ID ");       
            empId = bufferedReader.readLine();      
            for(int i=0;i<3;i++)    
            {      
                if(employees[i].empId.equals(empId))       
                {           
                    c=1;            
                    int salary = salary(employees[i].basic,employees[i].hra,da(employees[i].designationCode),employees[i].designationCode);      
                    details(employees[i].empId,employees[i].empName,employees[i].depName,employees[i].empDesignation,salary,da);      
                    break;        
                }    
            }     
            if(c!=1)      
            System.out.println("Entered employee ID not found");   
        } 
    }     
