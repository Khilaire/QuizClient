$(document).ready(() => {

    // load navigationsbar for gæster
    SDK.User.loadNavDefault();

    // deklarere variabel
    let quizId = SDK.getQueryParam("quizId");

    // Skjuler knap til at vise de korrekte svar
    $("#correctAnswersBtn").hide();

    SDK.Quiz.findQuestionById(quizId, (err, data) => {
        let questions = JSON.parse(data);

        questions.forEach(question => {
            console.log(question);
            $("#QuestionList").append(`<div id="${question.questionId}"><p><b>${question.questionTitle}</b></p></div>`);

            SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                let choices = JSON.parse(data);

                choices.forEach(choice => {
                    console.log(choice);
                    $("#" + question.questionId).append(`<p><input type="checkbox" class="answerOptions" value="${choice.answer}">
                    ${choice.choiceTitle} </p>`);
                });
            });
        });
    });

    // Deklarere variable til at holde data om nuværende user
    const currentUser = SDK.User.current();

    // Returner til dashboard, hhv. som administrator eller almindelig bruger
    $("#exitBtn").click(() => {
        let userType = currentUser.type;

        // userType 1 refererer til en almindelig bruger
        if (userType === 1) {
            alert("Du bliver omdirigeret til dit dashboard");
            window.location.href = "../HTML/defaultPage.html";
        }
        // userType 0 refererer til en administrator
        else {
            alert("Du bliver omdirigeret til dit dashboard");
            window.location.href = "../HTML/adminPage.html";
        }
    });

    // Gem besvarelse
    $("#saveBtn").click(() => {

        // Deklarere variable til score data
        let totalQuestions = 0;
        let correctAnswers = 0;

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

        // Modal der viser korrekte svar vs. spørgsmål
        $("#quizQuestionList").append(`<div><p>Du svarede rigtigt på <b>${correctAnswers}</b> ud af <b>${totalQuestions}</b> spørgsmål!</p>`);

        // Luk submitAnswersModal
        $("#exitModalBtn").click(() => {
            $('#submitAnswersModal').modal('hide');
            $("#quizQuestionList").html("");
        });

        // Knap til at eftertjekke sine svar bliver synlig
        $("#correctAnswersBtn").show();
    });

    $("#correctAnswersBtn").click(() => {

        // Viser modal med korrekte svar
        $('#correctResultsModal').modal('show');

        SDK.Quiz.findQuestionById(quizId, (err, data) => {
            let questions = JSON.parse(data);

            questions.forEach((question) => {
                SDK.Quiz.findChoiceById(question.questionId, (err, data) => {
                    let choices = JSON.parse(data);

                    // Inspireret af Cecilie Sylvest Fosbo
                    choices.forEach(choice => {
                        if (choice.answer === 1) {
                            // Appender spørgsmål
                            $('#correctResultsList').append(`<div id="${question.questionId}"><h5><b>${question.questionTitle}</b></h5></div>`);
                            // Appender svar til det pågældende spørgsmål
                            $('#correctResultsList').append(`<div id="${question.questionId}"><h6>${choice.choiceTitle}</h6></div>`);
                        }
                    });
                });

                $("#exitResultsModalBtn").click(() => {
                    $('#correctResultsModal').modal('hide');
                    $("#correctResultsList").html(""); // Tømmer /"resetter" resultatlisten
                });
            });
        });
    });
});
