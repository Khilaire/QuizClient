$(document).ready(() => {

    SDK.User.loadNavAdmin();

    // Valg: Distrubuerede Systemer
    const $listContainerTbodyDis = $("#listContainerDis");

    $("#dis-button").click(() => {

        $("#quizListDis").show();
        // Id 1 refererer til den quiz, der er tilknyttet kursus med Id 1 (Distribuerede systemer)
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // language=HTML
                $listContainerTbodyDis.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });

            $('.deleteQuizButton').click(function() {
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

    // Valg: IT Forandringsledelse
    const $listContainerTbodyItf = $("#listContainerItf");

    $("#itf-button").click(() => {

        $("#quizListItf").show();
        // Id 2 refererer til den quiz, der er tilknyttet kursus med Id 2 (IT Forandringsledelse)
        SDK.Quiz.findById(2, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // language=HTML
                $listContainerTbodyItf.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });
            $('.deleteQuizButton').click(function() {
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

    // Valg: Makroøkonomi
    const $listContainerTbodyMak = $("#listContainerMak");

    $("#mak-button").click(() => {

        $("#quizListMak").show();
        // Id 3 refererer til den quiz, der er tilknyttet kursus med Id 3 (Makroøkonomi)
        SDK.Quiz.findById(3, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // language=HTML
                $listContainerTbodyMak.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });
            $('.deleteQuizButton').click(function() {
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

    // Valg: VØS(3) - Finansiering
    const $listContainerTbodyFin = $("#listContainerFin");

    $("#fin-button").click(() => {

        $("#quizListFin").show();
        // Id 4 refererer til den quiz, der er tilknyttet kursus med Id 4 (Finansiering)
        SDK.Quiz.findById(4, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // language=HTML
                $listContainerTbodyFin.append(`
                    <tr>
                     <td id="deleteQuizBtn"><a>${quiz.quizId}</a></td>
                     <td><a =${quiz.quizId}&title=${quiz.quizTitle}">${quiz.quizTitle}</a></td>
                     <td> <button class="deleteQuizButton btn" data-id="${quiz.quizId}">Slet</button></td>
                    </tr>
                    `);
            });
            $('.deleteQuizButton').click(function() {
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

    // Opret quiz
    $("#titleCrt").click(() => {
        const courseId = $(".selectCourse").find("option:selected").val()
        const quizTitle = $("#inputQuizTitle").val();

        SDK.Quiz.createQuiz(courseId, quizTitle, (err, data) => {
            data = JSON.parse(data);

            console.log(err);
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                console.log("Der er sket en fejl!", err)
            } else {
                console.log("Succes!", data);
                window.location.href = ("questionCreation.html?quizId=" + data.quizId);
                const quizId = SDK.getQueryParam("quizId");
            }
        });
    });

    // Opret spørgsmål
    $("#questionCrt").click(() => {
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
                const quizId = SDK.getQueryParam("questionId");
            }
        });
    });

    // Opret svarmulighed
    $("#optionsCon").click(() => {

        const quizId = SDK.getQueryParam("quizId");
        const questionId = SDK.getQueryParam("questionId");
        const choiceTitle = $("#inputOption").val();
        const answer = $(".selectTrueFalse").find("option:selected").val();

        SDK.Quiz.createChoice(questionId, choiceTitle, answer,(err, data) => {
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
                const quizId = SDK.getQueryParam("quizId");
                const questionId = SDK.getQueryParam("questionId");
            }
        });
    });
    $("#questionCon").click(() => {
        const quizId = SDK.getQueryParam("quizId");
        return alert("Din svarmulighed er gemt - du bliver nu omridigeret tilbage til at oprette spørgsmål");
        console.log("Succes!", data);
        window.location.href = ("questionCreation.html?quizId=" + quizId);
    });

    $("#questionCrt").click(() => {
        console.log("Succes!", data);
        window.location.href = ("adminPage.html");
    });
});
