/**
 * Mesh first element size calculator
 * Instructions: imitrichev.compresearch.ru/
 * License: CC-BY-SA 3.0
 * License text: http://creativecommons.org/licenses/by-sa/3.0/legalcode
 * Warranty: without warranty of any kind, "as is". The author has no
 * liability for any claim, damages or other negative effect caused by or
 * happened when using this software.
 */
#include <iostream>
#include <math.h>
using namespace std;
int main()
{
	int N;
	cout<<"Enter number of cells\n";
	cin>>N;
	double first,last,sum,left=0.0;
	double k;
	double L,right;
	cout<<"Enter length\n";
	do
	{
		cin>>L;
		if (L<=0)
			cout<<"Length must be positive!\n";
	}
	while (L<=0);
	right=L;
	cout<<"Enter mesh growth factor\n";
	cin>>k;

	do
	{
		first=(left+right)/2;
		last=first;
		sum=first;
		for (int i=1; i<N; i++)
		{
			last*=k;
			sum+=last;
		}
		if (sum>L)
			right=first;
		else
			left=first;
	}
	while (fabs(sum-L)>1e-08);
	std::cout<<"N= "<<N<<", L= "<<L<<", growth factor k= "<<k<<", first element size h1= "<<first<<", bias factor r= "<<(last/first)<<"\n";
	return 0;
}
