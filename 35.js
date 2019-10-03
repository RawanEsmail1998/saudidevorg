function user(id,FirstName,LastName){
  this.id = id ;
  this.FirstName = FirstName ;
  this.LastName = LastName ;

}
var mohammed = new user (1001,"mohammed","alali");
var rawan = new user (102,"rawan","esmail");
document.write(mohammed.id+""+mohammed.FirstName+""+mohammed.LastName);
