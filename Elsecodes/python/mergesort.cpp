#include <iostream>
using namespace std;
      void merge(int array[], int l, int mid, int r){  
          int n1=mid-l + 1;
          int n2=r-mid;  
          int a[n1];
          int b[n2]; 
          for(int i=0;i<n1;i++){
              a[i]=array[l+i];     
          }
          for(int i=0;i<n2;i++){
              b[i]=array[mid+1+i];      
          }
          int i=0;
          int j=0;
          int k=l;
          while(i<n1 && j<n2){
              if(a[i]<b[j]){
                  array[k]=a[i];
                  k++; i++;
              }
              else{
                  array[k]=b[j];
                  k++; j++;         
              }
          }
          
          while(i<n1){
              array[k]=a[i];
            k++; 
            i++;            
          }
          while(j<n2){
              array[k]=b[j];
              k++;
              j++;
          }          
      }
      void mergesort(int array[] , int l , int r){
          if(l<r){
              int mid=(l+r)/2;
              mergesort(array,l,mid);
              mergesort(array,mid+1,r);             
              merge(array,l,mid,r);              
          }     
 }
 int main(){
     int n;
     cout<< "enter the length of array :: ";
     cin>> n;
     cout<<"enter elements :: \n";
     int array[n];
     for(int i =0;i<n;i++)
     cin>> array[i];
     mergesort(array,0,n-1);
     cout<<"array after performing sorting using merge sort :: \n";
     for(int i=0;i<n;i++){
         cout<<array[i];
         cout<<" ";     
     }
     return 0;
 }
