$(document).ready(() => {

    SDK.User.loadNavDefault();

    let title = SDK.getQueryParam("title");
    let quizId = SDK.getQueryParam("quizId");

    $("#correctAnswersBtn").hide();


    SDK.Quiz.findQuestionById(quizId, (err, data) => {
        var questions = JSON.parse(data);

        questions.forEach(question => {
            console.log(question);
            $("#QuestionList").append(`<div id="${question.questionId}"><p><b>${question.questionTitle}</b></p></div>`)

            SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                var choices = JSON.parse(data);

                choices.forEach(choice => {
                    console.log(choice);
                    $("#" + question.questionId).append(`<p><input type="checkbox" class="answerOptions" value="${choice.answer}"> ${choice.choiceTitle} </p>`)
                });
            });
        });
    });

    // Returner til dashboard
    const currentUser = SDK.User.current();
    $("#exitBtn").click(() => {
        var userType = currentUser.type;

        if (userType === 1) {
            alert("Du bliver omdirigeret til dit dashboard");
            window.location.href = "../HTML/defaultPage.html";
        } else {
            alert("Du bliver omdirigeret til dit dashboard");
            window.location.href = "../HTML/adminPage.html";
        }
    });

    $("#saveBtn").click(() => {

        var totalQuestions = 0;
        var correctAnswers = 0;

        $(".answerOptions").each(function () {
            if ($(this).is(":checked")) {
                totalQuestions++;
                if ($(this).val() == 1) {
                    correctAnswers++;
                }
            }
            console.log(correctAnswers);
        });

        $('#submitAnswersModal').modal('show');
        $("#quizQuestionList").append(`<div><p>Du svarede rigtigt på <b>${correctAnswers}</b> ud af <b>${totalQuestions}</b> spørgsmål!</p>`);

        // Luk submitAnswersModal
        $("#exitModalBtn").click(() => {
            $('#submitAnswersModal').modal('hide');
            $("#quizQuestionList").html("");
        });

        $("#correctAnswersBtn").show();
    });

    $("#correctAnswersBtn").click(() => {
        $('#correctResultsModal').modal('show');

        SDK.Quiz.findQuestionById(quizId, (err, data) => {
            var questions = JSON.parse(data);

            questions.forEach((question) => {
                SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                    var choices = JSON.parse(data);

                    choices.forEach(choice => {
                        if (choice.answer === 1) {
                            // Spørgsmål
                            $('#correctResultsList').append(`<div id="${question.questionId}"><h5><b>${question.questionTitle}</b></h5></div>`);
                            // Svar
                            $('#correctResultsList').append(`<div id="${question.questionId}"><h6>${choice.choiceTitle}</h6></div>`);
                        }
                    });
                });

                $("#exitResultsModalBtn").click(() => {
                    $('#correctResultsModal').modal('hide');
                    $("#correctResultsList").html("");
                });
            });
        });
    });
});
