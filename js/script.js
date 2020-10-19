function getAkanName (){
  var days=["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
  var maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleAkanNames=["Akoswa","Adwoa","Abena","Akau","Yaa","Afua","Ama"];
  var myBirthDay = document.getElementById("dateofbirth").value;
  var myGender = document.getElementsByName("gender");
  var dateOfBirth = new Date(myBirthDay);
  var dayOfTheWeek = dateOfBirth.getDay();

  if (myBirthDay ==="") {
   document.getElementById("message").innerHTML="<span> Please give a valid value </span>";
  } 

  if (dateOfBirth >= new Date()){
  console.log(myBirthDay,new Date());
  document.getElementById("message").innerHTML="<span> Cannot assign to chidren who are not born </span>";
    }
   else {
      for(var i=0;i<myGender.length; i ++) {
    if (myGender [i].checked) {
    if (myGender [i].value=== "male"){
      document.getElementById("message").innerHTML= "You were born on a <span>" + days[dayOfTheWeek] +" </span>,Your akan name is <span>" + maleAkanNames [dayOfTheWeek] + "</span>";

    } 
    else {
      document.getElementById("message").innerHTML= "You were born on a <span>" + days[dayOfTheWeek] +" </span>,Your akan name is <span>" + femaleAkanNames [dayOfTheWeek] + "</span>";

    } 
    break; 
  } else {
    document.getElementById("message").innerHTML="<div> please select a gender</div>";
  }
      }
    }
  }

prompt("please provide a date for your birthday")

