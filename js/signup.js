$(document).ready(() => {

    // load navigationsbar for gæster
    SDK.User.loadNavNon();

    // Køres hvis gæsten ønsker at oprette en (default) konto
    $("#createUserbtn").on("click", () => {

        // Deklarere variable til at holde brugerdata
        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 1; // man kan kun oprette en admin (type 0) såfremt man selv er logget ind som admin. Derfor er type per default altid 1.

        SDK.User.createUser(firstName, surname, username, password, type, (err, data) => {
            console.log(firstName + surname + username + password + type);

            if (err && err.xhr.status === 401) {
                console.log(data)
            }
            else if (err) {
                console.log("Der er sket en fejl!")
            } else {
                if (!username || !password) {
                    window.alert("Indtast venligst brugernavn og kodeord!");
                } else {
                    alert("Tillykke " + firstName + ", din bruger er blevet oprettet!");
                    window.location.href = ("loginPage.html");
                }
            }
        });
    });

    // Køres hvis en administrator ønsker at oprette en ny (administrator) konto
    $("#createAdmbtn").on("click", () => {

        // Deklarere variable til at holde brugerdata
        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 0;

        SDK.User.createUser(firstName, surname, username, password, type, (err, data) => {
            console.log(firstName + surname + username + password + type);

            if (err && err.xhr.status === 401) {
                console.log(data)
            }
            else if (err) {
                console.log("Der er sket en fejl!")
            } else {
                if (!username || !password) {
                    window.alert("Indtast venligst brugernavn og kodeord!");
                } else {
                    alert("Succes! " + firstName + " " + surname + " er oprettet som administrator!");
                    window.location.href = ("adminPage.html");
                }
            }
        });
    });
});
