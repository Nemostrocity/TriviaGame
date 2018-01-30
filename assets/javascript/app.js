//  Timer
//number to count down from
var number = 45;


var timeId;

//  When the quit button gets clicked, stop
$("#quit").on("click", stop);



function run() {
    clearInterval(timeId);
    timeId = setInterval(countDown, 1000);
}
var questions = [{
        question: "A(n) _________________ of Ravens",
        answers: ["unkindness",
        "melee",
        "congregation",
        "ensemble",
        "littany"]
    },
    {
        question: "A(n) _________________ of Parrots",
        answers: ["pandemonium",
        "hurry",
        "chattering",
        "parliament",
        "exaltation"]
    },
    {
        question: "A(n) _________________ of Polar Bears",
        answers: ["aurora",
        "crew",
        "convocation",
        "imposition",
        "knuckle"]
    },
    {
        question: "A(n) _________________ of Starfish",
        answers: ["constellation",
        "wash",
        "observance",
        "schoal",
        "dusting"]
    },
    {
        question: "A(n) _________________ of Rhinocerous",
        answers: ["clash",
        "wedge",
        "team",
        "party",
        "order"]
    }
];
//var currentQues = ();
//Buttons
// Function for displaying movie data
function createButtons() {

    $("#buttons-view").empty();
    // Looping through the array of questions
    for (var i = 0; i < questions.length; i++) {
        var currentQues = [questions[i].question];
        var currentAnswers = [questions[i].answers];


         //console.log("Answers " + currentAnswers);
         //for (var j = 0; j < 5; j++) {
         //var options = currentAnswers[j];
        
    
        

        // $("#questions").html(questions[i]+[0]);
        //console.log("answers:" + questions[i].answers);
        $("#questions").html(currentQues);
        //console.log(questions.answers);

            var myButton = $("<button>");
            // Adding a class of btn to our button
            myButton.addClass("answer-btn");
            // Adding a data-attribute
            myButton.attr("data-name", currentAnswers);
            //console.log(questions.answers[i]);
            for (var j = 0; j < 5; j++) {
            myButton.text(currentAnswers);
        }
            // Adding the button to the buttons-view div
            $("#buttons-view").append(myButton);
        }
    }

    //  The countDown function.
    function countDown() {
        number--;
        console.log("number");

        //  Display the number in the #timer tag.
        $("#timer").html("<h2>" + number + "</h2>");


        //  when number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stop();

            //  Alert the user that time is up.
            $("#timer").html("");
            $("#timer").html("<h2>Time’s Up!</h2>");

        }
    }

    //Display question for 10 seconds

    //create listener to listen for click of answer

    //if correct button clicked, increment correctAnswer count

    //if incorect button clicked, increment incorrectAnswer count

    //if no answer clicked, fade question and increment noAnswer count 

    //hide current question with jQUery, fading tquestion out,

    //reveal new question with JQuery animation

    //when timer done, fade questions, 
    //update results,
    //ask to replay (without reloading page )




    // var ordered = ();

    // var answers = (aOne, aTwo, aThree, aFour,aFive);

    // function aRandom() {
    //     for (var i = 0; i < 5; i++){
    //     answers[i].sort(function(a, b){return 0.5 - Math.random()});
    //     // var random = Math.floor(Math.random() * 5);
    //     // console.log("random Number: "+ random);
    //     console.log(answers[i]);
    // };
    // // var points = [40, 100, 1, 5, 25, 10];
    // // document.getElementById("demo").innerHTML = points;   

    //     console.log(aRandom);
    // }
    createButtons();


    //  The stop function
    function stop() {

        //  Clears our intervalId

        clearInterval(timeId);
    }
    createButtons();
    //  run function.
    run();
    //
    //




    //update scores 

    // function upDate() {
    //     var updateHTML = "<h3>You have entered: " + guessHistory + "</h3>" +
    //         "<p> </p>" +
    //         "<h4>You answered " + numGuess + " correct answers</h4>" +
    //         "<p></p>" +
    //         "<h4>You were mistaken" + userLoss + " times</h4>"
    //     document.querySelector("#reLoad").innerHTML = updateHTML;
    // }

    // //reset game
    // function reSet() {
    //     var numGuess = 8;
    //     var resetHTML = "<h3>You have entered: " + guessHistory + "</h3>" +
    //         "<p> </p>" +
    //         "<h4>You have " + numGuess + " guesses remaining.</h4>" +
    //         "<p></p>" +
    //         "<h4>You have guessed correctly " + userWins + " times</h4>" +
    //         "<p></p>" +
    //         "<h4>You have guessed incorrectly " + userLoss + " times</h4>"
    //     document.querySelector("#reLoad").innerHTML = resetHTML;
    // }
    //Score