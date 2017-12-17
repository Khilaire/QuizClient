$(document).ready(() => {

    SDK.User.loadNav();


    $("#login-button").click(() => {
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        // Metode til login (inspireret af tutor eksempel)
        SDK.User.login(username, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("Something went wrong");
            }
            else if (err){
                alert ("Der blev ikke fundet et match mellem brugernavn og kodeord");
            } else {

                // Hvis type er 0, refereres der til en administrator, mens der ved type 1 refereres til en almindelig bruger
                if(data.type === 1) {
                    window.location.href = "defaultPage.html";
                    alert("Du er logget ind som ALMINDELIG bruger");
                } else {
                    window.location.href = "adminPage.html";
                    alert("Du er logget ind som administrator");
                }

            }
        });

    });

});