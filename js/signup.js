$(document).ready(() => {

    SDK.User.loadNav();

    $("#createUserbtn").on("click", () => {

        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const userName = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 1; // man kan kun oprette en admin (type 0) såfremt man selv er logget ind som admin. Derfor er type per default altid 1.

        SDK.User.createUser(firstName, surname, userName, password, type, (err, data) => {
            console.log(firstName + surname + userName + password + type);


            if (err && err.xhr.status === 401) {
                console.log(data)
            }
            else if (err) {
                console.log("Der er sket en fejl!")
            } else {

                if (!userName || !password) {
                    window.alert("Indtast venligst brugernavn og kodeord!");

                } else {
                    alert("Tillykke " + firstName + ", din bruger er blevet oprettet!");
                    window.location.href = ("loginPage.html");
                }
            }
        });
    });
});
