var i =0 , n=0 , j=10;
while(i<5){
  i++;
  if(i==3){
    continue;
  }
  n+=i;
  document.write("n="+n+"i= "+i+"<br>");

}
checkiandj:while(i<4){
  document.write(i);
  i+=1;
  checkj:while(j>4){
    document.write(j);
    j-=1;
    if((j%2)==0){
      continue checkj ;
    }
    document.write(i+ " is odd.");
  }
  document.write("i="+i);
  document.write("j="+j);

}
