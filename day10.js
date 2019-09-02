var oldDate=new Date(2019,7,30); //the month and day starts from 0
var oldDateWithTime=new Date(2019,7,30,8,0);
var dateToday=new Date();
document.write("the year is ",oldDateWithTime.getFullYear());
document.write("<br>the month is ",oldDateWithTime.getMonth());
document.write("<br> the day is ",oldDateWithTime.getDay());
document.write("<br> the time is ",oldDateWithTime.getHours());
document.write("<br> the time in UTC timezone ", oldDateWithTime.getUTCHours());
documet.write("<br>",oldDateWithTime.toLocalDateString());
document.write("<br>",oldDateWithTime.tolSOString());
console.log(new Date());
