#include <bits/stdc++.h>
using namespace std;
int smallest(int arr[],int n , int k){
    set<int> s;
    for(int i=0;i<n;i++){
        s.insert(arr[i]);}
    auto it=s.begin();
    for(int i=0;i<k-1;i++){
        it++;}
    return *it;
}
int main(){
	int size,k;
    cout<<"Enter number of elements :: ";
    cin>>size;
    int array[size];
	cout<<"Enter numbers :: "<<endl;
	for (int i = 0; i < size; i++){
		cin>>array[i];}
    cout<<"Array :: ";
    for (int i = 0; i < size; i++){
		cout<<array[i]<< " ";}
    cout<<endl<<"Enter value of K :: "<<endl;
    cin>>k;
    cout<<"Required Element :: "<<smallest(array,size,k);
    return 0;
}