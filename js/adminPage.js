$(document).ready(() => {

    SDK.User.loadNavAdmin();
    let quizTitle = $("#inputQuizTitle").val();
    let courseId = $(".inputSelectCourse").find("option:selected").val();
    let quizId = SDK.getQueryParam("quizId");

    // Opret ny quiz
    $("#createQuizBtn").click(() => {

        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            console.log(err);

            if (err && err.xhr.status === 401) {
                console.log(data);
            }
            else if (err) {
                console.log("Der er sket en fejl!")
            } else {
                alert("Succes! Din quiz, " + quizTitle + ", er nu oprettet")
            }
        });
    });
});
