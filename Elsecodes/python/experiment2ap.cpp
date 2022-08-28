#include<iostream>
using namespace std;
void LeftArrayRotation(int arr[],int n,int d)
{
	int temp[n];
	int k=0;
	for(int i=d;i<n;i++){
		temp[k]=arr[i];
		k++;
	}
	for(int i=0;i<d;i++){
		temp[k]=arr[i];
		k++;
	}
	for(int i=0;i<n;i++){
		arr[i]=temp[i];
	}
}
int main()
{
	int n,d;
	cout<<"Enter size of the array :: ";
	cin>>n;
	int array[n];
	cout<<"Enter elements of the array :: "<<endl;
	for (int i = 0; i < n; i++)
	{
		cin>>array[i];
	}
	cout<<endl<<"Enter the number of units to be shifted :: ";
	cin>>d;
	cout<<endl<<"Array before rotation : ";
	for(int i=0;i<n;i++){
		cout<<array[i]<<" ";
	}
	LeftArrayRotation(array,n,d);
	cout<<endl<<"Array after required rotations :: ";
	for(int i=0;i<n;i++){
		cout<<array[i]<<" ";
	}
}