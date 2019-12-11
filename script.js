$("#time").html("Time: 0")
var timer = 75;


$("#startButton").off().on("click", function () {
    // TIMER START
    var timerInterval = setInterval(function () {
        timer--;
        $("#time").html("Time: " + timer)

        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    // QUESTION #1


    //Clear content and print options
    function printBtn() {
        $("#headings").html("Which of these is not a programming language?")
        var options = ["a. HTML", "b. javascript", "c. Porygon", "d. CSS"];
        $("#main").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        // $.each(options, function (index, element) {
        //     var answersList = $("<ul>")
        //     main.append(answersList)
        //     answersList.append("<button id=answers>" + element + "</button>")

        // for (i = 0; i < options.length; i++) {
        //     var answersList = $("<ul>")
        //     main.append(answersList)
        //     var answers = $("<button class=answers>" + options[i] + "</button>").attr("id", [i])
        //     answersList.append(answers)
        // }

        options.forEach(function (element, index) {
            var answersList = $("<ul>")
            main.append(answersList)
            var answers = $("<button class=answers>" + element + "</button>").attr("id", "firstQ" + index)
            answersList.append(answers)
        })
    }
    printBtn();

    /************************************************ */
    // Click response to first set of questions
    $("#firstQ0").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        $("#headings").html("What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?")
        var options = ["a. Repeater", "b. Loop", "c. Debugger", "d. Clone"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            options.forEach(function (element, index) {
                var answersList = $("<ul>")
                main.append(answersList)
                var answers = $("<button class=answers>" + element + "</button>").attr("id", "secondQ" + index)
                answersList.append(answers)
            })
        }
        printBtn();

    })

    $("#firstQ1").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        $("#headings").html("What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?")
        var options = ["a. Repeater", "b. Loop", "c. Debugger", "d. Clone"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            options.forEach(function (element, index) {
                var answersList = $("<ul>")
                main.append(answersList)
                var answers = $("<button class=answers>" + element + "</button>").attr("id", "secondQ" + index)
                answersList.append(answers)
            })
        }
        printBtn();
    })

    $("#firstQ2").off().on("click", function () {
        event.preventDefault();

        $("#headings").html("What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?")
        var options = ["a. Repeater", "b. Loop", "c. Debugger", "d. Clone"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            options.forEach(function (element, index) {
                var answersList = $("<ul>")
                main.append(answersList)
                var answers = $("<button class=answers>" + element + "</button>").attr("id", "secondQ" + index)
                answersList.append(answers)
            })
        }
        printBtn();
    })

    $("#firstQ3").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        clearInterval(timerInterval);
        $("#headings").html("All done! You're final score is " + timer)
        $("#main-section").empty();
        var main = $("#main-section");
        var enterInitials = $("<p> Enter your initials here: </p>")
        enterInitials.html("Enter your initials: ")
        var initials = document.createElement("input")
        initials.setAttribute("type", "text")
        main.append(enterInitials)
        enterInitials.append(initials)
        var submitScore = $("<button class=score> Submit </button>")
        enterInitials.append(submitScore)


        // $("#headings").html("What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?")
        // var options = ["a. Repeater", "b. Loop", "c. Debugger", "d. Clone"];

        // //Clear content and print options
        // function printBtn() {
        //     $("#main-section").empty();
        //     $("#startButton").empty();
        //     var main = $("#main-section")
        //     options.forEach(function (element, index) {
        //         var answersList = $("<ul>")
        //         main.append(answersList)
        //         var answers = $("<button class=answers>" + element + "</button>").attr("id", "secondQ" + index)
        //         answersList.append(answers)
        //     })
        // }
        // printBtn();
    })


















    /************************************************ */
    // Click response to second set of questions
    $("#secondQ0").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        $("#headings").html("Bootstrap is to CSS as jQuery is to...?")
        var options = ["a. HTML", "b. event listeners", "c. javascript", "d. API"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            options.forEach(function (element, index) {
                var answersList = $("<ul>")
                main.append(answersList)
                var answers = $("<button class=answers>" + element + "</button>").attr("id", "thirdQ" + index)
                answersList.append(answers)
            })
        }
        printBtn();
    })

    $("#secondQ1").off().on("click", function () {
        event.preventDefault();


        $("#headings").html("Bootstrap is to CSS as jQuery is to...?")
        var options = ["a. HTML", "b. event listeners", "c. javascript", "d. API"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            $.each(options, function (index, element) {
                var answersList = $("<ul>")
                main.append(answersList)
                answersList.append("<button class=answers>" + element + "</button>").attr("id", "thirdQ" + index)
            })
        }
        printBtn();
    })

    $("#secondQ2").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        $("#headings").html("Bootstrap is to CSS as jQuery is to...?")
        var options = ["a. HTML", "b. event listeners", "c. javascript", "d. API"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            $.each(options, function (index, element) {
                var answersList = $("<ul>")
                main.append(answersList)
                answersList.append("<button class=answers>" + element + "</button>").attr("id", "thirdQ" + index)
            })
        }
        printBtn();
    })

    $("#secondQ3").off().on("click", function () {
        event.preventDefault();
        alert("Wrong! Minus 10 seconds!")
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;
        timer--;

        $("#headings").html("Bootstrap is to CSS as jQuery is to...?")
        var options = ["a. HTML", "b. event listeners", "c. javascript", "d. API"];

        //Clear content and print options
        function printBtn() {
            $("#main-section").empty();
            $("#startButton").empty();
            var main = $("#main-section")
            $.each(options, function (index, element) {
                var answersList = $("<ul>")
                main.append(answersList)
                answersList.append("<button class=answers>" + element + "</button>").attr("id", "thirdQ" + index)
            })
        }
        printBtn();
    })

})





    // EVERYTHING GOES ABOVE THIS LINE (maybe not for storage)
// })

//In order for the questions to work, for example. all of the "secQi" click events need to go INSIDE all of the firstQi events

