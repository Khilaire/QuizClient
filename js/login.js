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
                console.log("Something went wrong")
            } else {

                if(data.type === 0) {
                    window.location.href = "admin-page.html"
                } else {
                    window.location.href = "user-page.html"
                    console.log(data)
                }

            }
        });

    });

});