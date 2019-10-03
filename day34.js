var test = {
  prop:42,
  fun:function(){
    return this.prop;
  }

};
document.write(test.func());
//استدعاء لل Global object
var x = this;
document.write(x);
// object window like alert(),prompt();
dicument.write(this === window);
a=37;
document.write("<br>"+window.a);
this.b="it's mine";
document.write("<br>"+window.b);
document.write("<br>"+b);
function myFunction(){
  return this;
}
document.write(myFunction());
