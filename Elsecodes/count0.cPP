#include <iostream>
using namespace std;
int main() {
    int size;
    int count=0;
   cout<<"Enter the number of elements you want in an array::";
   cin>>size;
   int array[size];
   cout<<"Enter elements::\n";
   for(int i;i<size;i++){
       cin>>array[i];
   }
   for(int i;i<size;i++){
       if(array[i]==0){
       count+=1;
       }
   }
   cout<<count;
}