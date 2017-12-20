$(document).ready(() => {

    SDK.User.loadNavAdmin();

    // Opret quiz
    $("#createQuizBtn").click(() => {
        var quizTitle = $("#inputQuizTitle").val();
        var courseId = $(".inputSelectCourse").find("option:selected").val();


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
