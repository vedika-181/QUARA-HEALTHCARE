function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    if(name.length == 0 && email.length == 0 && msg.length == 0){
        alert("Please enter the details");
    }
    else if(name.length <= 5){
        alert("Please enter more than 5 characters");
        return false;
    }
    else if(email.indexOf("@") == -1 || email.lenght < 6){
        alert("Please enter valid email-id");
        return false;
    }
    else if(msg.length <= 20){
        alert("Please enter a message more than 20 characters");
        return false;
    }
    else{
        alert("your query has been recorded we will get back to you within 48 working hours");
        location.reload();
        return true;
    }

    return true;
}
