$(document).ready(() => {

    // load navigationsbar for administrator
    SDK.User.loadNavAdmin();

    // Køres hvis brugeren vælger "Distrubuerede Systemer"
    // Container til at holde data og vise liste over quizzes relateret til DIS
    const $listContainerTbodyDis = $("#listContainerDis");

    $("#dis-button").click(() => {

        $("#quizListDis").show();

        // Id 1 refererer til den quiz, der er tilknyttet kursus med Id 1 (Distribuerede systemer)
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyDis.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });

            // Knap til at slette en quiz
            $('.deleteQuizButton').click(function () {
                if (window.confirm("Er du sikker på at du vil slette denne quiz?")) {
                    let id = $(this).data("id");

                    SDK.Quiz.deleteQuiz(id, (err) => {
                        if (err && err.xhr.status === 401) {
                            console.log(data);
                        }
                        else if (err) {
                            console.log("Der er sket en fejl!", err);
                        } else {
                            alert("Den valgte quiz er nu slettet");
                        }
                    });
                }
            });
        });
    });

    // Køres hvis brugeren vælger "IT Forandringsledelse"
    // Container til at holde data og vise liste over quizzes relateret til ITF
    const $listContainerTbodyItf = $("#listContainerItf");

    $("#itf-button").click(() => {

        $("#quizListItf").show();

        // Id 2 refererer til den quiz, der er tilknyttet kursus med Id 2 (IT Forandringsledelse)
        SDK.Quiz.findById(2, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyItf.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });

            // Knap til at slette en quiz
            $('.deleteQuizButton').click(function () {
                if (window.confirm("Er du sikker på at du vil slette denne quiz?")) {
                    var id = $(this).data("id");

                    SDK.Quiz.deleteQuiz(id, (err) => {
                        if (err && err.xhr.status === 401) {
                            console.log(data);
                        }
                        else if (err) {
                            console.log("Der er sket en fejl!", err);
                        } else {
                            alert("Den valgte quiz er nu slettet");
                        }
                    });
                }
            });
        });
    });

    // Køres hvis brugeren vælger "IT Forandringsledelse"
    // Container til at holde data og vise liste over quizzes relateret til Makroøkonomi
    const $listContainerTbodyMak = $("#listContainerMak");

    $("#mak-button").click(() => {

        $("#quizListMak").show();

        // Id 3 refererer til den quiz, der er tilknyttet kursus med Id 3 (Makroøkonomi)
        SDK.Quiz.findById(3, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyMak.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });

            // Knap til at slette en quiz
            $('.deleteQuizButton').click(function () {
                if (window.confirm("Er du sikker på at du vil slette denne quiz?")) {
                    var id = $(this).data("id");

                    SDK.Quiz.deleteQuiz(id, (err) => {
                        if (err && err.xhr.status === 401) {
                            console.log(data);
                        }
                        else if (err) {
                            console.log("Der er sket en fejl!", err);
                        } else {
                            alert("Den valgte quiz er nu slettet");
                        }
                    });
                }
            });
        });
    });

    // Køres hvis brugeren vælger "IT Forandringsledelse"
    // Container til at holde data og vise liste over quizzes relateret til VØS(3) - Finansiering
    const $listContainerTbodyFin = $("#listContainerFin");

    $("#fin-button").click(() => {

        $("#quizListFin").show();

        // Id 4 refererer til den quiz, der er tilknyttet kursus med Id 4 (Finansiering)
        SDK.Quiz.findById(4, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyFin.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });

            // Knap til at slette en quiz
            $('.deleteQuizButton').click(function () {
                if (window.confirm("Er du sikker på at du vil slette denne quiz?")) {
                    var id = $(this).data("id");

                    SDK.Quiz.deleteQuiz(id, (err) => {
                        if (err && err.xhr.status === 401) {
                            console.log(data);
                        }
                        else if (err) {
                            console.log("Der er sket en fejl!", err);
                        } else {
                            alert("Den valgte quiz er nu slettet");
                        }
                    });
                }
            });
        });
    });

    // Køres hvis brugeren vælger at oprette en ny quiz
    $("#titleCrt").click(() => {

        // Deklarer variable til at holde data ifb. oprettelse af ny quiz
        const courseId = $(".selectCourse").find("option:selected").val();
        const quizTitle = $("#inputQuizTitle").val();

        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            data = JSON.parse(data);

            console.log(err);
            if (err && err.xhr.status === 401) {
            }
            else if (err) {
                console.log("Der er sket en fejl!", err)
            } else {
                console.log("Succes!", data);
                window.location.href = ("questionCreation.html?quizId=" + data.quizId);
            }
        });
    });

    // Køres hvis brugeren vælger annullere processen
    $("#quizCnl").click(() => {
        window.location.href = ("adminPage.html");
    });

    // Køres hvis brugeren vælger at oprette et nyt spørgsmål
    $("#questionCrt").click(() => {

        // Deklarer variable til at holde data ifb. oprettelse af et nyt spørgsmål
        const quizId = SDK.getQueryParam("quizId");
        const questionTitle = $("#inputQuestion").val();

        SDK.Quiz.createQuestion(quizId, questionTitle, (err, data) => {
            data = JSON.parse(data);

            if (err && err.xhr.status === 401) {
                console.log(data);
            }
            else if (err) {
                console.log("Der er sket en fejl!", err)
            } else {
                console.log("Succes!", data);
                window.location.href = ("choiceCreation.html?questionId=" + data.questionId + "&quizId=" + data.quizId);
            }
        });
    });

    // Køres hvis brugeren vælger at oprette en ny svarmulighed
    $("#optionsCon").click(() => {

        // Deklarer variable til at holde data ifb. oprettelse af ny svarmulighed
        const questionId = SDK.getQueryParam("questionId");
        const choiceTitle = $("#inputOption").val();
        const answer = $(".selectTrueFalse").find("option:selected").val();

        SDK.Quiz.createChoice(questionId, choiceTitle, answer, (err, data) => {
            data = JSON.parse(data);

            if (err && err.xhr.status === 401) {
                console.log(data);
            }
            else if (err) {
                console.log("Der er sket en fejl!", err)
            } else {
                $("#inputOption").val(""); // tømmer feltet/"resetter"
                return alert("Din svarmuligheded er gemt - du kan nu tilføje flere");
                console.log("Succes!", data);
                window.location.href = ("choiceCreation.html?questionId=" + data.questionId + "&quizId=" + data.quizId);
            }
        });
    });

    // Køres hvis brugeren vælger at gå tilbage til at oprette spørgsmål
    $("#questionCon").click(() => {

        // Deklarer variabel til at holde data ifb. oprettelse af spørgsmål
        const quizId = SDK.getQueryParam("quizId");

        return alert("Din svarmulighed er gemt - du bliver nu omridigeret tilbage til at oprette spørgsmål");
        console.log("Succes!", data);
        window.location.href = ("questionCreation.html?quizId=" + quizId);
    });

    // Køres hvis brugeren væælger at afslutte processen
    $("#quizCrt").click(() => {
        window.location.href = ("adminPage.html");
    });
});
