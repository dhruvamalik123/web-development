#include<iostream>
using namespace std;
void quicksort(int arr[],int first,int last)
{
    int i,j,pivot,temp;
    if(first<last)
    {
        pivot=first;
        i=first;
        j=last;

        while(i<j)
        {
            while(arr[i]<=arr[pivot]&&i<last)
            {
               i++;
            }
               while (arr[j]>arr[pivot])
               {
                   j--;
               }
               if(i<j)
               {
                   temp=arr[i];
                   arr[i]=arr[j];
                   arr[j]=temp;
               }
    
            
        }
        temp=arr[pivot];
        arr[pivot]=arr[j];
        arr[j]=temp;
        quicksort(arr,first,j-1);
        quicksort(arr,j+1,last);
    }
}
int main()
{
    int i,n;
    cout<<"Enter (n) size of array::";
    cin>>n;
    int arr[n];
    cout<<"Enter elements of array::\n"; 
    for(i=0;i<n;i++)
    {
        cin>>arr[i];

    }
    
    quicksort(arr,0,n-1);
    cout<<"After Sorting::\n";
    for(i=0;i<n;i++)
    {
        cout<<arr[i]<<"\n";
    }

    return 0;
}
