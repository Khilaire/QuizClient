const SDK = {

    // Henvist til løsning (getQueryParam) af Cecilie Sylvest Fosbo. Hentet fra: https://stackoverflow.com/questions/46324730/how-to-get-parameters-from-url-in-javascript
    getQueryParam: (sParam) => {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },

    // server URL
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {

        // Inspireret af eksemplet fra undervisningen (Javascript crash course af Jesper Bruun Hansen)
        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        // Inspireret af eksemplet fra undervisningen (Javascript crash course af Jesper Bruun Hansen)
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: headers,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: (data, status, xhr) => {

                cb(null, data, status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    // Alt følgende har taget udgangspunkt i eksemplet, Bookstore, fra undervisningen (Javascript crash course af Jesper Bruun Hansen)
    User: {

        // API-request: Returner nuværende bruger
        current: () => {
            return SDK.Storage.load("user");
        },

        // API-request: Opret bruger
        createUser: (firstName, lastName, userName, password, type, cb) => {
            SDK.request({
                method: "POST",
                url: "/user/",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    username: userName,
                    password: password,
                    type: type,
                }
            }, cb);
        },

        // API-request: login
        login: (username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password,
                },
                url: "/user/login",
                method: "POST"
            }, (err, data) => {

                if (err) return cb(err);

                SDK.Storage.persist("userId", data.userId);
                SDK.Storage.persist("user", data);

                cb(null, data);
            });
        },

        // API-request: log ud
        logOut: () => {

            SDK.Storage.remove("userId");
            SDK.Storage.remove("user");

            // Omdiriger efter man er logget ud
            window.location.href = "../HTML/index.html";
        },

        // Load navigation for gæster
        loadNavNon: (cb) => {
            $("#nav-container").load("./Navigation/nonMenu.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
           
            <li><a href="index.html" id="logout-link">log ud</a></li>
          `);

                } else {
                    $(".navbar-right").html(`
            <li><a href="loginPage.html">Login <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();
            });
        },

        // Load navigation for almindelige bruere
        loadNavDefault: (cb) => {
            $("#nav-container").load("./Navigation/defaultMenu.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
           
            <li><a href="index.html" id="logout-link">Log ud</a></li>
          `);
                } else {
                    $(".navbar-right").html(`
            <li><a href="loginPage.html">Login <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();
            });
        },

        // Load navigation for administratorer
        loadNavAdmin: (cb) => {
            $("#nav-container").load("./Navigation/adminMenu.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
           
            <li><a href="index.html" id="logout-link">Log ud</a></li>
          `);
                } else {
                    $(".navbar-right").html(`
            <li><a href="loginPage.html">Login <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();
            });
        },
    },

    Quiz: {
        // API-request: Opret ny quiz
        createQuiz: (courseId, quizTitle, cb) => {
            SDK.request({
                method: "POST",
                url: "/quiz",
                data: {
                    courseId: courseId,
                    quizTitle: quizTitle,
                },
            }, (err, data) => {

                if (err) return cb(err);
                console.log(err);

                SDK.Storage.persist("courseId", data.courseId);
                SDK.Storage.persist("quizTitle", data.quizTitle);

                cb(null, data);
            });
        },

        // API-request: Opret ny spørgsmål
        createQuestion: (quizId, questionTitle, cb) => {
            SDK.request({
                method: "POST",
                url: "/question",
                data: {
                    quizId: quizId,
                    questionTitle: questionTitle,
                },
            }, (err, data) => {

                if (err) return cb(err);
                console.log(err);

                cb(null, data);
            });
        },

        // API-request: Opret ny svarmulighed
        createChoice: (questionId, choiceTitle, answer, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: {
                    questionId: questionId,
                    choiceTitle: choiceTitle,
                    answer: answer,
                },
            }, (err, data) => {

                if (err) return cb(err);
                console.log(err);

                cb(null, data);
            });
        },

        // API-request: Slet quiz
        deleteQuiz: (id, cb) => {
            SDK.request({
                method: "DELETE",
                url: "/quiz/" + id

            }, (err, data) => {
                if (err) return cb(err);
                cb(null, data);
            });
        },

        // API-request: Find quiz pba. Id
        findById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/quiz" + "/" + id,
            }, cb);
        },

        // API-request: Find spørgsmål pba. Id
        findQuestionById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/question" + "/" + id,
            }, cb);
        },

        // API-request: Find svarmulighed pba. Id
        findChoiceById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/choice" + "/" + id,
            }, cb);
        },
    },

    // API-request: Opret ny spørgsmål
    question: {
        createQuestion: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/question",
                data: data,

            }, cb);
        },
    },

    // API-request: Opret ny svarmulighed
    Choice: {
        createChoice: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: data,

            }, cb);
        },
    },

    // Inspireret af eksemplet fra undervisningen (Javascript crash course af Jesper Bruun Hansen)
    Storage: {
        prefix: "FMLQUIZsdk",
        //Function for storing element in local storage
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        //Function for loading element from local storage
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        //Function for deleting element in local storage
        remove: (key) => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    },
};
