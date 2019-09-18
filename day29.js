var x ;
function positive(x){
if(x>=0){
document.write("the number is positive");
}else throw" x must not be negative ";
}
try{
  var n = Number(prompt("Please enter a positive number : ",""));
  positive(n);
  alert(n + " is positive");
} catch(y){
  alert(y);
}finally{
  alert("finally,i got it");
}
