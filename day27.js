var x ;
function square(x){
  return x*x;
}
document.write(square(3));
function counter(){
  for(var count =1; count++){
    document.write(count+"A<br>");
    if(count===5){
      return;
    }
    document.write(count +"B<br>");
  }
  document.write(count+"c<br>");
}
counter();
