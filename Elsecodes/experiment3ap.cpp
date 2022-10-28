#include <bits/stdc++.h>
using namespace std;
int main(){
    string str1="";
    cin>>str1;
    string str2(1, str1[0]);
    int k=0;
    int len=str1.size();
    for(int i=1;i<len;i++){
        if(str1[i]==str2[k]){
            continue;
        } 
        else{
            string str3(1,str1[i]);
            str2+=str3;
            k++;
        }
    }  
    cout<<len-(k+1)<<endl;
    cout<<str2;
    return 0;
}