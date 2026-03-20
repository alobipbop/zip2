/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main()
{
    string s;
    //nhap xau s
    getline(cin, s);
    string res; //xau ket qua
    bool space = true;
    for (int i=0;i<s.length(); i++){
        if (s[i]!=' '){
            if ((s[i] == '.' || s[i] == '?' || s[i] == '!' || s[i] == ','||s[i] == ':') && !res.empty() && res.back() == ' ') {
                res.pop_back();
            }
            
            res += tolower(s[i]);
            space= false;
        }
        else {
            if (space==false){ //chi them space neu truoc do khong phai space 
            res += ' '; //them space
            space = true; //reset
            }
        }
    }
    if (!res.empty() && res.back() == ' ')
    res.pop_back();
    bool cap = true;
    for (int i=0;i<res.length(); i++) {
        if (cap==true && res[i] >= 'a' && res[i] <= 'z'){
            res[i]=toupper(res[i]);
            cap=false;
        }
        if (res[i] =='.'||res[i] =='?'||res[i] =='!'||res[i] ==':'){
            cap=true;
        }
    }
    cout << res<<endl;
    return 0;
}