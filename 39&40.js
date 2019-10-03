function teacher (NOofStudent,NOofHours,CoordinatorName,Subject){
  this.NOofStudent=NOofStudent;
  this.NOofHours = NOofHours ;
  this.CoordinatorName = CoordinatorName;
  this.Subject=Subject;

}
var rawan = teacher (30,8,"noha","math");
ver teacher = {
  NOofStudent : 15,
  NOofHours : 19,
  CoordinatorName : "sarah",
  Subject : "science",
  get NOofStudentGet(){
    return this.NOofStudent;

  },
  get NOofHoursGet(){
    return this.NOofHours;
  },
  get CoordinatorNameGet(){
    return this.CoordinatorName ;
  },
  get .SubjectGet(){
    return   this.Subject ;
  },
  set  NOofHoursSet(value){
    this.NOofStudent= value ;
  },
  set NOofStudentSet(value){
    this.NOofStuden = value;
  },
  set CoordinatorNameSet(value){
    this.CoordinatorName= value;

  },
  set SubjectSet(value){
    this.Subject = value ;
  }

}
