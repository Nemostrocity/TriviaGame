//Timer
   
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the quit button gets clicked, run the stop function.
    $("#quit").on("click", stop);


   
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
//Buttons

//Questions
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

//Answers

//score