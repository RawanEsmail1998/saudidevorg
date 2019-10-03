try{
  var num1=Number(prompt("please enter a number "));
   var num2=Number(prompt("please enter a number bigger than zero"))
   if(num2!=0){
   document.write(num1/num2 ) ;
 }
}catch(e){
  alert(e);
}finally{
  alert("great , try again");
}
