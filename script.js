document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       PROGRAM SEARCH
    ================================= */

    const programSearch =
        document.getElementById("programSearch");

    const programCards =
        document.querySelectorAll(".searchable-card");

    const noPrograms =
        document.getElementById("noPrograms");


    if (programSearch) {

        programSearch.addEventListener("input", function () {

            const searchTerm =
                this.value.toLowerCase().trim();

            let visibleCount = 0;


            programCards.forEach(function (card) {

                const text =
                    card.textContent.toLowerCase();

                if (text.includes(searchTerm)) {

                    card.style.display = "";

                    visibleCount++;

                } else {

                    card.style.display = "none";

                }

            });


            if (noPrograms) {

                noPrograms.style.display =
                    visibleCount === 0 ? "block" : "none";

            }

        });

    }


    /* ================================
       ADMISSION FORM
    ================================= */

    const admissionForm =
        document.getElementById("admissionForm");

    if (admissionForm) {

        admissionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const message =
                document.getElementById("admissionMessage");


            if (!admissionForm.checkValidity()) {

                admissionForm.reportValidity();

                return;

            }


            message.textContent =
                "Application submitted successfully! Your application has been received.";

            message.className =
                "form-message success";


            admissionForm.reset();

        });

    }


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const message =
                document.getElementById(
                    "contactMessageStatus"
                );


            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }


            message.textContent =
                "Thank you! Your message has been submitted successfully.";

            message.className =
                "form-message success";


            contactForm.reset();

        });

    }


    /* ================================
       REGISTRATION FORM
    ================================= */

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const password =
                    document.getElementById(
                        "registerPassword"
                    ).value;

                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    ).value;


                const message =
                    document.getElementById(
                        "registerMessage"
                    );


                if (!registerForm.checkValidity()) {

                    registerForm.reportValidity();

                    return;

                }


                if (password !== confirmPassword) {

                    message.textContent =
                        "Passwords do not match.";

                    message.className =
                        "form-message error";

                    return;

                }


                message.textContent =
                    "Registration successful! You can now login.";

                message.className =
                    "form-message success";


                registerForm.reset();

            }
        );

    }


    /* ================================
       LOGIN
    ================================= */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    document.getElementById(
                        "loginEmail"
                    ).value.trim().toLowerCase();


                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value;


                const role =
                    document.getElementById(
                        "loginRole"
                    ).value;


                const message =
                    document.getElementById(
                        "loginMessage"
                    );


                if (!loginForm.checkValidity()) {

                    loginForm.reportValidity();

                    return;

                }


                const studentEmail =
                    "student@nexoraschool.rw";

                const studentPassword =
                    "student123";


                const adminEmail =
                    "admin@nexoraschool.rw";

                const adminPassword =
                    "admin123";


                let validLogin = false;


                if (
                    role === "student" &&
                    email === studentEmail &&
                    password === studentPassword
                ) {

                    validLogin = true;

                    sessionStorage.setItem(
                        "nexoraUserRole",
                        "student"
                    );

                    sessionStorage.setItem(
                        "nexoraUserName",
                        "Student User"
                    );

                }


                if (
                    role === "admin" &&
                    email === adminEmail &&
                    password === adminPassword
                ) {

                    validLogin = true;

                    sessionStorage.setItem(
                        "nexoraUserRole",
                        "admin"
                    );

                    sessionStorage.setItem(
                        "nexoraUserName",
                        "Administrator"
                    );

                }


                if (validLogin) {

                    window.location.href =
                        "dashboard.html";

                } else {

                    message.textContent =
                        "Invalid email, password or account role.";

                    message.className =
                        "form-message error";

                }

            }
        );

    }


    /* ================================
       DASHBOARD
    ================================= */

    const studentDashboard =
        document.getElementById(
            "studentDashboard"
        );


    const adminDashboard =
        document.getElementById(
            "adminDashboard"
        );


    if (
        studentDashboard ||
        adminDashboard
    ) {

        const role =
            sessionStorage.getItem(
                "nexoraUserRole"
            );


        const name =
            sessionStorage.getItem(
                "nexoraUserName"
            );


        const userName =
            document.getElementById(
                "userName"
            );


        const dashboardTitle =
            document.getElementById(
                "dashboardTitle"
            );


        const dashboardSubtitle =
            document.getElementById(
                "dashboardSubtitle"
            );


        if (userName) {

            userName.textContent =
                name || "User";

        }


        if (role === "student") {

            if (studentDashboard) {
                studentDashboard.style.display =
                    "block";
            }

            if (adminDashboard) {
                adminDashboard.style.display =
                    "none";
            }

            if (dashboardTitle) {
                dashboardTitle.textContent =
                    "Student Dashboard";
            }

            if (dashboardSubtitle) {
                dashboardSubtitle.textContent =
                    "Welcome back. Here is your academic overview.";
            }

        }

        else if (role === "admin") {

            if (studentDashboard) {
                studentDashboard.style.display =
                    "none";
            }

            if (adminDashboard) {
                adminDashboard.style.display =
                    "block";
            }

            if (dashboardTitle) {
                dashboardTitle.textContent =
                    "Administrator Dashboard";
            }

            if (dashboardSubtitle) {
                dashboardSubtitle.textContent =
                    "Manage students, staff, courses and school services.";
            }

        }

        else {

            window.location.href =
                "login.html";

        }

    }


    /* ================================
       LOGOUT
    ================================= */

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                sessionStorage.removeItem(
                    "nexoraUserRole"
                );

                sessionStorage.removeItem(
                    "nexoraUserName"
                );


                window.location.href =
                    "login.html";

            }
        );

    }

});
