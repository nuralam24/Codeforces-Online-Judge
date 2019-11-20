#include"bits/stdc++.h"
using namespace std;
typedef long long ll;
 
int main() {
 
      int T;
      cin>>T;
      while(T--) {
        ll a,b;
        cin>>a>>b;
        ll x = abs(a-b);
 
        ll mod = x%5;
        ll DIV1 = x/5;
 
        ll mod2 = mod%2;
        ll DIV2 = mod/2;
 
        ll mod3 = mod2%1;
        ll DIV3 = mod2/1;
 
 
        cout<<DIV1+DIV2+DIV3<<endl;
 
      }
}
