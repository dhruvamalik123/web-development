#include <bits/stdc++.h>
using namespace std;
template <typename T>
T MaxElement(T array[], T size){
	int Max = array[0];
	for (int i = 0; i < size; i++)
	{
		if (Max < array[i] )
		{
			Max = array[i];
		}
	}
	return Max;
}
int main(){
	int size;
    cout<<"Enter number of elements :: ";
    cin>>size;
    int array[size];
	cout<<"Enter numbers :: "<<endl;
	for (int i = 0; i < size; i++)
	{
		cin>>array[i];
	}
	cout<<"Largest Number of array is:"<<MaxElement(array,size)<<endl;
	return 0;
}