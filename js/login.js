$(document).ready(() => {

    SDK.User.loadNav();


    $("#login-button").click(() => {
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        // Metode til login (inspireret af tutor eksempel)
        SDK.User.login(username, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("Something went wrong")
            }
            else if (err){
                alert ("Der blev ikke fundet et match mellem brugernavn og kodeord");
            } else {

                // Hvis type er 0, refereres der til en admin-bruger, mens der ved type 1 refereres til en almindelig bruger
                if(data.type === 0) {
                    window.location.href = "adminPage.html"
                } else {
                    window.location.href = "defaultPage.html"
                    console.log(data)
                }

            }
        });

    });

});