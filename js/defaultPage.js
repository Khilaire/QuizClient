$(document).ready(() => {

    SDK.User.loadNavDefault();


    // Valg: Distrubuerede Systemer
    const $listContainerTbodyDis = $("#listContainerDis");

    $("#dis-button").on("click", () => {

        $("#quizListDis").show();
        // Id 1 refererer til den quiz, der er tilknyttet kursus med Id 1 (Distribuerede systemer)
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // language=HTML
                $listContainerTbodyDis.append(`<tr>
                                                <td><a href="quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
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
                $listContainerTbodyItf.append(`<tr>
                                                <td><a href="quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
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
                $listContainerTbodyMak.append(`<tr>
                                                <td><a href="quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
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
                $listContainerTbodyFin.append(`<tr>
                                                <td><a href="quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
            });
        });
    });
});
