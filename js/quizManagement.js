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
                            console.log("Der er sket en fejl!");
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
                            console.log("Der er sket en fejl!");
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
                            console.log("Der er sket en fejl!");
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
                            console.log("Der er sket en fejl!");
                        } else {
                            alert("Den valgte quiz er nu slettet");
                        }
                    });
                }
            });
        });
    });
});
