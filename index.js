
var readLineSync=require("readline-sync");
const chalk=require("chalk");
var moment = require('moment'); 
const warning = chalk.red.bold;
const correct=chalk.green.bold;
const head=chalk.yellow.bold;
const msg=chalk.blueBright.bold;


console.log(head("Program to check if your birth year is a leap year or not\n"));

var name=readLineSync.question(head("Enter your name : "));

console.log(head("\nHello "+name));

//===========
// input part
//===========

var date=readLineSync.question(msg("\nEnter your date of birth in DD/MM/YYYY format : "));

//=================
// processing part
//=================

if((moment(date,"DD/MM/YYYY",true).isValid())){
  console.log(correct("\nThe date you entered is "+date));
  var year=date.slice(6);

  //=============
  // output part
  //============
  
  if((year%4==0)&&(year%10!=0)||(year%400==0)){
    console.log(correct("\n"+year+" is a leap year"))
    console.log(head("\nIf you liked this please share this on social media"))
  }
  else{
    console.log(warning("\n"+year+" is not a leap year"));
  }
}

//=============
// output part
//=============

else{
  console.log(warning("\nsorry the date you entered is of wrong format..."));
}



// var year=readLineSync.question(msg("enter year to be checked :"));

// if((year%4==0)&&(year%10!=0)||(year%400==0)){
//   console.log(correct("\n"+year+" is a leap year"));
// }
// else{
//   console.log(warning("\n"+year+" is not a leap year"));
// }