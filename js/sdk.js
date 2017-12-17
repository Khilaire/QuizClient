const SDK = {
    serverURL: "http://localhost:9090/api",

    request: (options, cb) => {

        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

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

    // Ændre til question?
   /* Book: {
        addToBasket: (book) => {
            let basket = SDK.Storage.load("basket");

            //Has anything been added to the basket before?
            if (!basket) {
                return SDK.Storage.persist("basket", [{
                    count: 1,
                    book: book
                }]);
            }

            //Eksisterer XYZ i forvejen?
            let foundBook = basket.find(b => b.book.id === book.id);
            if (foundBook) {
                let i = basket.indexOf(foundBook);
                basket[i].count++;
            } else {
                basket.push({
                    count: 1,
                    book: book
                });
            }

            SDK.Storage.persist("basket", basket);
        },
        // Find alle
        findAll: (cb) => {
            SDK.request({
                method: "GET",
                url: "/books",
                headers: {
                    filter: {
                        include: ["authors"]
                    }
                }
            }, cb);
        },
        // Opret XYZ
        create: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/books",
                data: data,
                headers: {authorization: SDK.Storage.load("tokenId")}
            }, cb);
        }
    },
    Author: {
        findAll: (cb) => {
            SDK.request({method: "GET", url: "/authors"}, cb);
        }
    },
*/

   // Quiz -> Questions -> options

    // Opret quiz (inspireret af "Order fra Jesper XYZ's eksempel fra øvelsestime")
    Quiz: {
        create: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/quiz",
                data: data,
            }, cb);
        },

        currentQuiz: () => {
            return SDK.Storage.load("quizId");
        },

        findById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/quiz" + "/" + id,
            }, cb);
        }
    },

 /*   Order: {
        create: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/orders",
                data: data,
                headers: {authorization: SDK.Storage.load("tokenId")}
            }, cb);
        },
        // Find mine XYZ
        findMine: (cb) => {
            SDK.request({
                method: "GET",
                url: "/orders/" + SDK.User.current().id + "/allorders",
                headers: {
                    authorization: SDK.Storage.load("tokenId")
                }
            }, cb);
        }
    },*/

    // Alle funktioner tilknyttet en 'bruger'
    User: {

        // Find alle brugere
        findAll: (cb) => {
            SDK.request({method: "GET", url: "/user"}, cb);
        },
        current: () => {
            return SDK.Storage.load("user");
        },

        // Opret ny bruger
        createUser: (firstName, surname, username, password, type, cb) => {
            SDK.request({
                method: "POST",
                url: "/user/",
                data: {
                    firstName: firstName,
                    lastName: surname,
                    username: username,
                    password: password,
                    type: type,
                }
            }, cb);
        },

        // Log ud fra den nuværende session
        logOut: () => {
            SDK.Storage.remove("tokenId");
            SDK.Storage.remove("userId");
            SDK.Storage.remove("user");
            window.location.href = "index.html";
        },

        // Login
        login: (username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password
                },
                url: "/user/login",
                method: "POST"
            }, (err, data) => {

                //On login-error
                if (err) return cb(err);

                SDK.Storage.persist("userId", data.userId);
                SDK.Storage.persist("user", data.user);

                cb(null, data);

            });
        },

        // Load navigation
        loadNav: (cb) => {
            $("#nav-container").load("nav.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
            <li><a href="defaultPage.html" id="defaultHome">Hjem</a></li>
            <li><a href="index.html" id="logout-link">Logout</a></li>
          `);
                } else {
                    $(".navbar-right").html(`
            <li><a href="loginPage.html">Login <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();
            });
        }
    },

    Storage: {
        prefix: "BookStoreSDK",
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        remove: (key) => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    }
};
