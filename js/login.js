$(document).ready(() => {

    // load navigationsbar for gæster
    SDK.User.loadNavNon();

    $("#loginBtn").on("click", () => {

        // Deklarere variable til at holde brugerdata
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        SDK.User.login(username, password, (err, data) => {
            data = JSON.parse(data);

            if (err && err.xhr.status === 401) {
                return alert("Der er sket en fejl!");
                console.log(data);
            }
            else if (err) {
                return alert("Der blev ikke fundet et match mellem brugernavn og kodeord");
            } else {
                if (data.type === 1) {
                    window.location.href = "../HTML/defaultPage.html";
                    alert("Du bliver logget ind");
                    console.log(data);
                } else {
                    window.location.href = "../HTML/adminPage.html";
                    alert("Du er bliver logget ind som administrator");
                    console.log(data);
                }
            }
        });
    });
});
