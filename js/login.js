$(document).ready(() => {

    SDK.User.loadNav();

    $("#login-button").click(() => {

        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        // Inspiration fra tutor projekt
        SDK.User.login(username, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err){
                console.log("Something wrong happened")
            } else {

                if(data.type === 1) {
                    window.location.href = "user-page.html"
                } else {
                    window.location.href = "admin-page.html"
                    console.log(data)
                }

            }
        });

    });

});