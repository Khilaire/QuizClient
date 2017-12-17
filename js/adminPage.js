$(document).ready(() => {

    $("#createQuizBtn").click(() => {
        const quizTitle = $("#inputQuizTitle").val();
        const courseId = $(".inputSelectCourse").find("option:selected").val();


        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            console.log(err);

            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }

            else if (err) {
                console.log("Der er sket en fejl!")

            } else {
                alert("Succes! Din quiz, " + quizTitle + ", er nu oprettet")

            }

        });

    });

});