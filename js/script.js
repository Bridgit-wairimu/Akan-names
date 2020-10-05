function getAkanNames(){
  var days=["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
  var maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleAkanNames=["Akoswa","Adwoa","Abena","Akau","Yaa","Afua","Ama"];
  var myBirthDay = document.getElementById("dateofbirth").value;
  var myGender = document.getElementsByName("gender");
  var dateOfBirth = new Date(myBirthDay);
  var dayOfTheWeek = dateOfBirth.getDay();
  if (myBirthDay ==="") {
    getElementById("message").innerHTML="<span> Please give a valid value </span>";
  } 
  if (dateOfBirth >= new Date()){
  console.log(myBirthDay,new Date());
  document.getElementById("message").innerHTML="<span> Cannot assign to chidren who are not born </span>";
    }
   else {
      for(var i=0;i<myGender.length; i++) {
    if (myGender [i].checked) {
    if (myGender [i].value=== "male"){
      document.getElementById("message").innerHTML= "Born on a <span>" + days[dayOfTheWeek] +" </span>,Your akan name <span>" + maleAkanNames [dayOfTheWeek] + "</span>";

    } 
    else {
      document.getElementById("message").innerHTML= "Born on a <span>" + days[dayOfTheWeek] +" </span>,Your akan name<span>" + femaleAkanNames [dayOfTheWeek] + "</span>";

    } 
    break; 
  } else {
    getElementById("message").innerHTML="<div> please select a gender</div>";
  }
      }
    }
  }



