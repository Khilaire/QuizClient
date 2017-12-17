$(document).ready(() => {

    SDK.User.loadNav();

    // Oprettelse af almindelig bruger
    $("#createUserbtn").click(() => {

        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 1; // man kan kun oprette en admin (type 0) såfremt man selv er logget ind som admin. Derfor er type per default altid 1.

        // Oprettelse af en ny bruger
        SDK.User.createUser(firstName, surname, username, password, type, (err, data) => {

            if (err && err.xhr.status === 401) {
                console.log("Der er sket en fejl!")
                console.log(data)
            }
            else {
                if (!username || !password){
                    window.alert("Indtast venligst brugernavn og kodeord")
                }

                else {
                    alert("Tillykke " + firstName + "! Din bruger er blevet oprettet")
                    window.location.href = ("loginPage.html");
                }
            }
        })

    })

    // Oprettelse af Administrator
    $("#createAdmbtn").click(() => {

        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 0;

        // Oprettelse af en ny bruger
        SDK.User.createUser(firstName, surname, username, password, type, (err, data) => {

            if (err && err.xhr.status === 401) {
                console.log("Der er sket en fejl!")
                console.log(data)
            }
            else {
                if (!username || !password){
                    window.alert("Indtast venligst brugernavn og kodeord")
                }

                else {
                    alert("Tillykke " + firstName + "! Din bruger er blevet oprettet")
                    window.location.href = ("adminPage.html");
                }
            }
        })

    })

});

// Reset data inputs når modal lukkes
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});