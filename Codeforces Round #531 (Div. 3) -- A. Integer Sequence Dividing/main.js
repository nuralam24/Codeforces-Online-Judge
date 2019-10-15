#include"bits/stdc++.h"
using namespace std;
typedef long long ll;
               
int main(){
         
      int n;
      cin>>n;
      int s = 0;
      for(int i=0; i<=n; i++) {
             s += i;
      }
      cout<<((s%2 == 0) ? 0 : 1);
}

