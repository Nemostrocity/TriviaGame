//  Timer
//  number variable determines # of secods
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the quit button gets clicked, stop
$("#quit").on("click", stop);



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
    number--;

    //  Display the number in the #show-number tag.
    $("#timer").html("<h2>" + number + "</h2>");


    //  when number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $("#timer").html("");
        $("#reLoad").html("Time's Up!");
        
    }
}

//  The stop function
function stop() {

//  Clears our intervalId

    clearInterval(intervalId);
}

//  run function.
run();
//
//
//Questions & Answers
    var Questions = {
    qOne:"A(n) _________________ of Ravens", 
    aOne:"unkindness", 
    qTwo:"A(n) _________________ of Parrots", 
    aTwo:"pandemonium",
    qThree:"A(n)________________ of Polar Bears", 
    aThree:"aurora",
    qFour:"A(n)_________________ of Starfish",
    aFour:"constellation",
    qFive:"A(n)__________________ of Rhinocerous",
    aFive:"crash"};

//Score

