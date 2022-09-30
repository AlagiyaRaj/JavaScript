let x,y,num,ps,a;
function validateform(){
    x = document.forms["taskform"]["name1"].value;
    if (x == ""){
        // alert("Name Must Be Filled!");
        document.getElementById("nameerr").innerHTML = "Please Enter Valid Name";
        return false;
    }
    else{
        document.getElementById("nameerr").innerHTML = " ";
    }
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(taskform.mail1.value))
  {
      document.getElementById("emailerr").innerHTML = " ";
      return (true)
  }

    document.getElementById("emailerr").innerHTML = "Please Enter Valid Email";
    return (false)
}
function validatenum(){
     num = parseInt(taskform.phonenum.value);
    y = num.toString();

    // console.log(num);
    if(y.length == "" || y.length < 10 ){
        document.getElementById("numerr").innerHTML = "Enter a 10 Digit Mobile Number";
    }
    else{
        document.getElementById("numerr").innerHTML = " ";
    }
}
function validatepassword(){
    ps;
    ps = (taskform.pass.value);
    if(ps == "" || ps == null){
        document.getElementById("passerr").innerHTML = "Enter A Valid Password";
    }
    else if(ps.length < 6){
        document.getElementById("passerr").innerHTML = "Password must be more than 5 character";
    }
    else{
        document.getElementById("passerr").innerHTML = " ";
    }
}
function validatecbox(){
    a;
    a = (taskform.chbox.value);
    if(document.taskform.chbox.checked == false){
        document.getElementById("cbox").innerHTML = "Please Accept Terms & condition";
        return false;
    }
    else{
        document.getElementById("cbox").innerHTML = " ";
    }
}
function check(){
    signin();
    validatecbox()
}
function signin(){
    let user = (siform.mailcheck.value);
    let userps = (siform.passcheck.value);
     if(user === "rajalagiya@gmail.com" && userps === "Raj@123"){
        alert("Login Successful!");
     }
     else{
        alert(" Please Try Again");

     }

     if(user == ""){
        document.getElementById("Sign").innerHTML = "Please Enter Valid Email!"
     }
     else{
        document.getElementById("Sign").innerHTML = ""

     }
     if (userps == ""){
        document.getElementById("Sign1").innerHTML = "Please Enter Valid Password!"
     }
     else{
        document.getElementById("Sign1").innerHTML = ""
        
     }
}

let lgii = document.getElementById("lform");
let sii = document.getElementById("sup");
function switch1() {
    console.log("hello");
    if (lgii.style.display == "block") {
      lgii.style.display = "none";
      sii.style.display = "block";
    } else {
      lgii.style.display = "block";
      sii.style.display = "none";
    }
  }

  function switch2() {
    console.log("hell1");
    if (sii.style.display == "block") {
      sii.style.display = "none";
      lgii.style.display = "block";
    } else {
      sii.style.display = "block";
      lgii.style.display = "none";
    }
  }