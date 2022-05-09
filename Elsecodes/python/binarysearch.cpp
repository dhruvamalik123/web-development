    #include <stdio.h>  
    int binarySearch(int a[], int lower_bound, int upper_bound, int val)    
    {    
        int mid;    
        if (upper_bound >= lower_bound)     
        {        mid = (lower_bound + upper_bound)/2;
            if(a[mid] == val)    
            {                 
                return mid+1;    
            } 
            else if(a[mid] < val)     
            {  
                return binarySearch(a, mid+1, upper_bound, val);    
            }
            else     
            {  
                return binarySearch(a, lower_bound, mid-1, val);    
            }          
        }    
        return -1;     
    }   
    int main() {  
      int a[] = {10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100}; 
      int val = 30; 
      int n = sizeof(a) / sizeof(a[0]); 
      int res = binarySearch(a, 0, n-1, val); 
      printf("The elements of the array are - ");  
      for (int i = 0; i < n; i++)  
      printf("%d ", a[i]);   
      printf("\nElement to be searched is - %d", val);  
      if (res == -1)  
      printf("\nElement is not present in the array");  
      else  
      printf("\nElement is present at %d position of array", res);  
      return 0;  
    }  