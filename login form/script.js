function mysubmit1(){
    var uname=document.forms["myform"]["uname"].value;
    var upswd=document.forms["myform"]["upswd"].value;
    if(uname==null|| uname==""){

        document.getElementById("errorbox").innerHTML="enter the user name";
        return false;
    }
    if(upswd==null|| upswd==""){

        document.getElementById("errorbox").innerHTML="enter the user password";
        return false;
    }
    if(uname!=''&& upswd !=''){

       alert("login successful");
        
    }
    

}
//form 2

function mysubmit2(){
    var uname2=document.forms["myform2"]["uname2"].value;
    var email=document.forms["myform2"]["uemail"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
    var upswd22=document.forms["myform2"]["upswd22"].value;
    if(uname2==null|| uname2==""){

        document.getElementById("errorbox").innerHTML="enter the user name";
        return false;
    }
    if(email==null|| email==""){

        document.getElementById("errorbox").innerHTML="enter the email id";
        return false;
    }
    if(upswd2==null|| upswd2==""){

        document.getElementById("errorbox").innerHTML="enter the user password";
        return false;
    }
    if(upswd22==null|| upswd22==""){

        document.getElementById("errorbox").innerHTML="enter the user password";
        return false;
    }
    if(upswd2!= upswd22){

        document.getElementById("errorbox").innerHTML="enter same password bellow";
        return false;
    }

    if(uname2!=''&& upswd2 !=''&& email!=''&& upswd22!='' ){

       alert("login successful");
        
    }
    

}