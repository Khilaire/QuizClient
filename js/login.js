$(document).ready(() => {

    SDK.User.loadNav();

    $("#loginBtn").on("click", () => {

        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        SDK.User.login(username, password, (err, data) => {
            data = JSON.parse(data);

            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("Der er sket en fejl!");
                console.log(data);

            }
            else if (err) {
                return alert("Der blev ikke fundet et match mellem brugernavn og kodeord");
            } else {
                if (data.type === 1) {
                    window.location.href = "defaultPage.html";
                    alert("Du bliver logget ind");
                    console.log(data);
                } else {
                    window.location.href = "adminPage.html";
                    alert("Du er bliver logget ind som administrator");
                    console.log(data);
                }
            }
        });
    });
});
