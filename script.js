function validate(){
    if(document.getElementById("name").value==""){
        alert("Enter NAme:");
        return false;
    }
     if(document.getElementById("edu").value==""){
        alert("Enter Edducation:");
        return false;
    }
     if(document.getElementById("skill").value==""){
        alert("Enter skills:");
        return false;
    }
     if(document.getElementById("pro").value==""){
        alert("Enter projects:");
        return false;
    }
    alert("Successful");
    return true;
}