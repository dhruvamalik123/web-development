#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    string name;
    int age;
    cout << "Enter your name and age." << endl;
    cin>>name;
    cin>>age;
    ofstream myfile("xyz.txt");
    myfile << "Name ::"<<name<<" Age::"<<age;
    myfile.close();
    cout << "The write operation is done." << endl;
    char arr2[100];
    ifstream obj("xyz.txt");
    obj.getline(arr2, 100);
    obj.close();
    cout << arr2 <<endl;
    cout<<"Reading operation done";
    return 0;
}