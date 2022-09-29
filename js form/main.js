let x,y,num,z,ps,a;
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
function validatedrop(){
    z = (taskform.count.value);
    console.log(z);
    if(z == "0"){
        // alert("enter country");
        document.getElementById("drop").innerHTML = "Select Country";
        return false;
    }
    else{
        document.getElementById("drop").innerHTML = " ";
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
// function confirmbox(){
//     confirm("Are You Sure?");
// }