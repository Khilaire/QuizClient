$(document).ready(() => {

    SDK.User.loadNav();

    $("#createUser").click(() => {

        const firstName = $("#inputName").val();
        const surname = $("#inputSurname").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const type = 1; // man kan kun oprette en admin såfrem man selv er logget ind som admin. Derfor er type per default altid 1.

    })

}

// Reset data inputs når modal lukkes
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});