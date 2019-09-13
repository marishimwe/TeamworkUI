function signup(){
        var signbutton = document.getElementById('sign');
        var displaysetting = signbutton.style.display;
        var button = document.getElementById('signButton');
        if (displaysetting == 'block'){
            signbutton.style.display= 'none';
        }
        else{
            signbutton.style.display='block';
        }
    }
    function login(){
        var userName=document.getElementById("displayname").value;
        var Password=document.getElementById("password").value;
        if (userName == "employee1" && Password == "employee1" )
    {
        alert("Login successfully");
        window.location ="users page.html";
        }
        
    else{document.getElementById("demo").innerHTML = "Invalid username or password!";
    
        }
    }
    

