$(document).ready(() => {

    // load navigationsbar for administrator
    SDK.User.loadNavAdmin();

    // Deklarere variable til storage af input data
    const quizTitle = $("#inputQuizTitle").val();
    const courseId = $(".inputSelectCourse").find("option:selected").val();

    // On Click event, opret quiz
    $("#createQuizBtn").click(() => {

        // API kald
        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            console.log(err);

            if (err && err.xhr.status === 401) {
                console.log(data);
            }
            else if (err) {
                console.log("Der er sket en fejl!")
            } else {
                return alert("Succes! Din quiz, " + quizTitle + ", er nu oprettet")
            }
        });
    });
});
