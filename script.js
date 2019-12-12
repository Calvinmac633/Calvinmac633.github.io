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
})
/************************************************ */
// Click response to first set of questions
$(document).on("click", "#firstQ0", function () {
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

$(document).on("click", "#firstQ1", function () {
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

$(document).on("click", "#firstQ2", function () {
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

$(document).on("click", "#firstQ3", function () {
    event.preventDefault();
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
    alert("Wrong! Minus 10 seconds!")




    // enterInitials.html("Enter your initials: ")
    // var initials = initialsBox.innerHTML;
    // main.append(container)
    // container.append(enterInitials)
    // enterInitials.append(form)
    // form.append(initialsBox)




    // var highscores = [];


    // $("#scoreButton").on("click" ,function (event) {
    //     event.preventDefault();
    //     var initials = $("#inputBox").val()
    //     $("#headings").html("Highscores")
    //     $("#main-section").empty();
    //     // highscores.push(initials)
    //     // for (i=0;i<highscores.length;i++) {}
    //     var score = (initials + "-" + timer)
    //     var main = $("#main-section");
    //     main.append(score)
    // })

    // THIS IS WHERE I"M TRYING TO SET UP THE LOCAL STORAGE
    // STUFF COMMENTED BELOW STILL NEEDS TO BE USED

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



/************************************************ */
// Click response to second set of questions
$(document).on("click", "#secondQ0", function () {
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

$(document).on("click", "#secondQ1", function () {
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

$(document).on("click", "#secondQ2", function () {
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

$(document).on("click", "#secondQ3", function () {
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



/************************************************ */
// Click response to THIRD set of questions
$(document).on("click", "#thirdQ0", function () {
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

    $("#headings").html("What does 'this' refer to?")
    var options = ["a. CSS styling", "b. Title", "c. Functions", "d. Window"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        options.forEach(function (element, index) {
            var answersList = $("<ul>")
            main.append(answersList)
            var answers = $("<button class=answers>" + element + "</button>").attr("id", "forthQ" + index)
            answersList.append(answers)
        })
    }
    printBtn();
})

$(document).on("click", "#thirdQ1", function () {
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


    $("#headings").html("What does 'this' refer to?")
    var options = ["a. CSS styling", "b. Title", "c. Functions", "d. Window"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "forthQ" + index)
        })
    }
    printBtn();
})

$(document).on("click", "#thirdQ2", function () {
    event.preventDefault();
    

    $("#headings").html("What does 'this' refer to?")
    var options = ["a. CSS styling", "b. Title", "c. Functions", "d. Window"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "forthQ" + index)
        })
    }
    printBtn();
})

$(document).on("click", "#thirdQ3", function () {
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

    $("#headings").html("What does 'this' refer to?")
    var options = ["a. CSS styling", "b. Title", "c. Functions", "d. Window"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "forthQ" + index)
        })
    }
    printBtn();
})

/************************************************ */
// Click response to FORTH set of questions
$(document).on("click", "#forthQ0", function () {
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

    $("#headings").html("Choose the item that is not part of the DOM?")
    var options = ["a. Window", "b. Document", "c. jQuery", "d. Body"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        options.forEach(function (element, index) {
            var answersList = $("<ul>")
            main.append(answersList)
            var answers = $("<button class=answers>" + element + "</button>").attr("id", "fifthQ" + index)
            answersList.append(answers)
        })
    }
    printBtn();
})

$(document).on("click", "#forthQ1", function () {
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


    $("#headings").html("Choose the item that is not part of the DOM?")
    var options = ["a. Window", "b. Document", "c. jQuery", "d. Body"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "fifthQ" + index)
        })
    }
    printBtn();
})

$(document).on("click", "#forthQ2", function () {
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

    $("#headings").html("Choose the item that is not part of the DOM?")
    var options = ["a. Window", "b. Document", "c. jQuery", "d. Body"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "fifthQ" + index)
        })
    }
    printBtn();
})

$(document).on("click", "#forthQ3", function () {
    event.preventDefault();

    $("#headings").html("Choose the item that is not part of the DOM?")
    var options = ["a. Window", "b. Document", "c. jQuery", "d. Body"];

    //Clear content and print options
    function printBtn() {
        $("#main-section").empty();
        $("#startButton").empty();
        var main = $("#main-section")
        $.each(options, function (index, element) {
            var answersList = $("<ul>")
            main.append(answersList)
            answersList.append("<button class=answers>" + element + "</button>").attr("id", "fifthQ" + index)
        })
    }
    printBtn();
})


/************************************************ */
// Click response to FIFTH AND FINAL set of questions
$(document).on("click", "#fifthQ0", function () {
    event.preventDefault();
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
    alert("Wrong! Minus 10 seconds!")

    $("#time").html("Time: " + timer)

    // clearInterval(timerInterval);
    $("#headings").html("All done! You're final score is " + timer)
    $("#main-section").empty();
    var main = $("#main-section");
    var form = $("<form>")
    var container = $("<div>")
    var enterInitials = $("<label> Enter your initials here: </label>")
    initialsBox = $("<input type=text>").attr("id", "inputBox");
    main.append(form);
    form.append(container);
    container.append(enterInitials);
    enterInitials.append(initialsBox);
    var submitScore = $("<button id=scoreButton> Submit </button>")
    enterInitials.append(submitScore)
})
$(document).on("click", "#fifthQ1", function () {
    event.preventDefault();
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
    alert("Wrong! Minus 10 seconds!")

    $("#time").html("Time: " + timer)

    // clearInterval(timerInterval);
    $("#headings").html("All done! You're final score is " + timer)
    $("#main-section").empty();
    var main = $("#main-section");
    var form = $("<form>")
    var container = $("<div>")
    var enterInitials = $("<label> Enter your initials here: </label>")
    initialsBox = $("<input type=text>").attr("id", "inputBox");
    main.append(form);
    form.append(container);
    container.append(enterInitials);
    enterInitials.append(initialsBox);
    var submitScore = $("<button id=scoreButton> Submit </button>")
    enterInitials.append(submitScore)
})
$(document).on("click", "#fifthQ2", function () {
    event.preventDefault();
    

    $("#time").html("Time: " + timer)

    // clearInterval(timerInterval);
    $("#headings").html("All done! You're final score is " + timer)
    $("#main-section").empty();
    var main = $("#main-section");
    var form = $("<form>")
    var container = $("<div>")
    var enterInitials = $("<label> Enter your initials here: </label>")
    initialsBox = $("<input type=text>").attr("id", "inputBox");
    main.append(form);
    form.append(container);
    container.append(enterInitials);
    enterInitials.append(initialsBox);
    var submitScore = $("<button id=scoreButton> Submit </button>")
    enterInitials.append(submitScore)
})
$(document).on("click", "#fifthQ3", function () {
    event.preventDefault();
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
    alert("Wrong! Minus 10 seconds!")

    $("#time").html("Time: " + timer)

    // clearInterval(timerInterval);
    $("#headings").html("All done! You're final score is " + timer)
    $("#main-section").empty();
    var main = $("#main-section");
    var form = $("<form>")
    var container = $("<div>")
    var enterInitials = $("<label> Enter your initials here: </label>")
    initialsBox = $("<input type=text>").attr("id", "inputBox");
    main.append(form);
    form.append(container);
    container.append(enterInitials);
    enterInitials.append(initialsBox);
    var submitScore = $("<button id=scoreButton> Submit </button>")
    enterInitials.append(submitScore)
})

$(document).on("click", "#scoreButton", function (event) {
    event.preventDefault();
    var initials = $("#inputBox").val()
    $("#headings").html("Highscores")
    $("#main-section").empty();
    // highscores.push(initials)
    // for (i=0;i<highscores.length;i++) {}
    var score = (initials + " - " + timer)
    var main = $("#main-section");
    main.append(score)
})
var highscores = [];
highscores.push(initials)
function highscores() {
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

}



// })





    // EVERYTHING GOES ABOVE THIS LINE (maybe not for storage)
// })

//In order for the questions to work, for example. all of the "secQi" click events need to go INSIDE all of the firstQi events

