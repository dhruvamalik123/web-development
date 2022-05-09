#include<stdio.h>
int main(){
  int a[2][2],b[2][2],c[2][2],i,j;
  int P1,P2,P3,P4,P5,P6,P7;

  printf("Enter the 4 elements of first matrix:: \n");
  for(i=0;i<2;i++)
      for(j=0;j<2;j++)
           scanf("%d",&a[i][j]);

  printf("Enter the 4 elements of second matrix: \n");
  for(i=0;i<2;i++)
      for(j=0;j<2;j++)
           scanf("%d",&b[i][j]);

  printf("\nThe first matrix is\n");
  for(i=0;i<2;i++){
      printf("\n");
      for(j=0;j<2;j++)
           printf("%d\t",a[i][j]);
  }

  printf("\nThe second matrix is\n");
  for(i=0;i<2;i++){
      printf("\n");
      for(j=0;j<2;j++)
           printf("%d\t",b[i][j]);
  }

  P1= (a[0][0] + a[1][1])*(b[0][0]+b[1][1]);
  P2= (a[1][0]+a[1][1])*b[0][0];
  P3= a[0][0]*(b[0][1]-b[1][1]);
  P4= a[1][1]*(b[1][0]-b[0][0]);
  P5= (a[0][0]+a[0][1])*b[1][1];
  P6= (a[1][0]-a[0][0])*(b[0][0]+b[0][1]);
  P7= (a[0][1]-a[1][1])*(b[1][0]+b[1][1]);

  c[0][0]=P1+P4-P5+P7;
  c[0][1]=P3+P5;
  c[1][0]=P2+P4;
  c[1][1]=P1-P2+P3+P6;

   printf("\nAfter multiplication using strassen multiplication\n");
   for(i=0;i<2;i++){
      printf("\n");
      for(j=0;j<2;j++)
           printf("%d\t",c[i][j]);
   }

   return 0;
}