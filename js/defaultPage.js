$(document).ready(() => {

    // load navigationsbar for administrator
    SDK.User.loadNavDefault();

    // Køres hvis brugeren vælger "Distrubuerede Systemer"
    // Container til at holde data og vise liste over quizzes relateret til DIS
    const $listContainerTbodyDis = $("#listContainerDis");

    $("#dis-button").on("click", () => {

        $("#quizListDis").show();
        // Id 1 refererer til den quiz, der er tilknyttet kursus med Id 1 (Distribuerede systemer)
        SDK.Quiz.findById(1, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyDis.append(`<tr>
                                                <td><a href="../HTML/quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
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
                $listContainerTbodyItf.append(`<tr>
                                                <td><a href="../HTML/quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
            });
        });
    });

    // Køres hvis brugeren vælger "Makroøkonomi"
    // Container til at holde data og vise liste over quizzes relateret til MAK
    const $listContainerTbodyMak = $("#listContainerMak");

    $("#mak-button").click(() => {

        $("#quizListMak").show();
        // Id 3 refererer til den quiz, der er tilknyttet kursus med Id 3 (Makroøkonomi)
        SDK.Quiz.findById(3, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyMak.append(`<tr>
                                                <td><a href="../HTML/quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
            });
        });
    });

    // Køres hvis brugeren vælger "VØS(3) - Finansiering"
    // Container til at holde data og vise liste over quizzes relateret til FIN
    const $listContainerTbodyFin = $("#listContainerFin");

    $("#fin-button").click(() => {

        $("#quizListFin").show();
        // Id 4 refererer til den quiz, der er tilknyttet kursus med Id 4 (VØS(3) - Finansiering)
        SDK.Quiz.findById(4, (err, data) => {
            let quizzes = JSON.parse(data);

            quizzes.forEach(quiz => {
                console.log(quiz);

                // Appender data til tabellen
                $listContainerTbodyFin.append(`<tr>
                                                <td><a href="quizPage.html?quizId=${quiz.quizId}">${quiz.quizTitle}</a></td>
                                            </tr>`);
            });
        });
    });
});