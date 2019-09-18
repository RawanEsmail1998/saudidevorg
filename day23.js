var i =0 ;
HowToLabel:while (i<3) {
  document.write("i= "+i+"<br>");
  i++;
}
for(var i =0 ; i<1000; i++ ){
  document.write("Hello <ber>");
  if(i==2){
    break;
  }

}
var x=0, z =0 ;
labelCancelLoops : while(true){
  document.write("outer loop(x) : "+x+" ");
  x+=1;
  z=1;

while(true){
  document.write("inner loop(z)" + z+" <br> ");
  z+=1;
  if(x===3 & z===3){
    break labelCancelLoops ;

  }else if(z===3){
    break ;
  }
      
}
}
