//testing properties
ar person = {
  firstName : "rawan",
  lastName : "esmail",
  age : 21 ;
  fullName : function(){
    return this.firstName + ""+this.lastName ;
  }
};
document.write("firstName" in person);
//or
document.write(person.hasOwnProperty("firstName"));

//search about propertyEnumerable
