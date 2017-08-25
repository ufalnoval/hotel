<script language="JavaScript">
function Login(url)
    {  
     var username=document.login.username.value;
     username=username.toLowerCase();
     var password=document.login.password.value;
     password=password.toLowerCase();
     if (username=="admin" && password=="admin")
     {
     window.location = url;
     }
     else
     {
     alert("User name dan password anda salah!");
     }
    }      
        </script>
      