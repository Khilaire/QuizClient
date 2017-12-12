$(document).ready(() => {

    SDK.User.loadNav();

    $("#createUserbtn").click(() => {

        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 1; // man kan kun oprette en admin (type 0) såfremt man selv er logget ind som admin. Derfor er type per default altid 1.

        SDK.User.createUser(firstName, surname, username, password, type, (err, data) => {

            console.log(firstName + surname + username + password + type);

            if (err) {
                console.log("Der er sket en fejl!")
                console.log(data)
            }
            else {
                if (!username || !password){
                    window.alert("Indtast venligst brugernavn og kodeord")
                }

                else {
                    alert("Succes! Din bruger er blevet oprettet")
                    window.location.href = ("loginPage.html");
                }
            }
        })

    })

});

// Reset data inputs når modal lukkes
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});