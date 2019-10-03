// property getters and setters
ar person = {
  firstName : "rawan",
  lastName : "esmail",
  age : 21 ,
  language: "EN",
  get langGet(){
    return this.language;},
    set langSet(Value){
      this.language = Value;
    }
  };
  person.langSet = "AR";
  document.getElementById("demo").innerHTML = person.langGet;
