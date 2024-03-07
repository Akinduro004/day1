
const name = "Learn to code by watching others";
const nameContainer = document.getElementById("name");
       function Show() {
  let index = 0;
  const interval = setInterval(() => {
    nameContainer.textContent += name[index];
    index++;
    if (index === name.length) {
      clearInterval(interval);
    }
  }, 50);}
       
function formsubmission(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    const email_A=document.getElementById("email-a").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var form=document.getElementById("form");
   form.style.height="550px";
   


if(fname ==""){
    var fillname=document.getElementById("fillfname");
     fillfname.innerHTML="Enter firstname!";
     fillfname.style.fontSize="10px";
     fillfname.style.color="red";
}

if(lname == ""){
   var filllname=document.getElementById("filllname");
    filllname.innerHTML="Enter lastname!";
    filllname.style.fontSize="10px";
    filllname.style.color="red";
}
if(email_A == ""){
  var fillemail=  document.getElementById("fillemail");
   fillemail.innerHTML="Enter email address!";
   fillemail.style.fontSize="10px";
   fillemail.style.color="red";
}


if(password == ""){
   var fillpassword= document.getElementById("fillpassword");
    fillpassword.innerHTML="Enter password!";
    fillpassword.style.fontSize="10px";
    fillpassword.style.color="red";

}
if(confirmpassword == ""){
    var fillpassword= document.getElementById("fillconfirmpassword");
   fillconfirmpassword.innerHTML="confirm password!";
   fillconfirmpassword.style.fontSize="10px";
   fillconfirmpassword.style.color="red";

}
else if(confirmpassword!==password){
    var fillpassword= document.getElementById("fillconfirmpassword");
    fillconfirmpassword.innerHTML="recheck password!";
    fillconfirmpassword.style.fontSize="10px";
    fillconfirmpassword.style.color="red";
}

}