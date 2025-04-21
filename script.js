function login(){
    const form_data = {
        username: document.getElementById('user').value,
        password: document.getElementById('pwd').value,
    }

    fetch("login.php", {
        method: "POST",
        body: JSON.stringify(form_data),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    username = document.getElementById('user').value;
    document.getElementById("error").style.display = 'block';
    document.getElementById("error").innerHTML = "&#9746; samAccountName o userPrincipalName desconocido " + username;
}
/*
$(document).ready(function(){
    $username = $("#user");
    $("#formulario").submit(function(e){
        login();
        $("#error").css("display", "block");
        $("#error").html("&#9746; samAccountNAme o userPrincipalName desconocido " + $username);
    });
});*/
