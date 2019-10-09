#include"bits/stdc++.h"
using namespace std;
typedef long long ll;
 
int main() {
 
    int n; cin>>n;
    char c[1000000];
    scanf("%s", c+1);
    ll s = 0;
    for(int i=1; i<=n; i++) {
        if(c[i]%2 == 0) {
            s += i;
        }
    }
    cout<<s<<endl;
    return 0;
}
