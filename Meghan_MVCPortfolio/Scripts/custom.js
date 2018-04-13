//EXERCISE ONE
$("#Ex1").click(function () {
    //User Input
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());

    //Restrict button
    //if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
    //    swal("Please enter five numbers.");
    //    return;
    //}

    if (num1 == "" || num2 == "" || num3 == "" || num4 == "" || num5 == "") {
        swal("Oops, something went wrong!", "Please enter five numbers.", "warning")
        return;
    }

    //Sum
    var sum = num1 + num2 + num3 + num4 + num5;

    //Product
    var product = num1 * num2 * num3 * num4 * num5;

    //Mean
    var mean = sum / 5;

    //Smallest
    var smallest = Math.min(num1, num2, num3, num4, num5);

    //Largest
    var largest = Math.max(num1, num2, num3, num4, num5);

    //Create strings
    var output = "The smallest number is: " + smallest + "<br>";
    output += "The largest number is: " + largest + "<br>";
    output += "The mean is: " + mean + "<br>";
    output += "The sum is: " + sum + "<br>";
    output += "The product is: " + product + "<br>";

    //Output
    $("#p1").html(output);
});
//END EXERCISE ONE

//EXERCISE TWO
$("#Ex2").click(function () {
    //User Input
    var factnum = Number($("#factnum").val());

    //Restrict button
    if (factnum == "" || factnum == 0) {
        swal("Oops, something went wrong!", "Please enter a number greater than zero and less than 171.", "warning");
        return;
    }

    //Do something
    //var output = math.factorial(factnum);
    function factorial(factnum) {
        if (factnum == 0) {
            return 1;
        }
        else if (factnum >= 171) {
            swal("Uh oh...", "The number 171 (or greater) cannot be calculated. Enter a lower number.", "info");
            return;
        }
        // This is it! Recursion!!
        return factnum * factorial(factnum - 1);
    }

    //Output
    $("#p2").text("The factorial is: " + factorial(factnum));
});
//END EXERCISE TWO

//EXERCISE THREE
$("#Ex3").click(function () {
    //User Input
    var fizzbuzz1 = Number($("#fizzbuzz1").val());
    var fizzbuzz2 = Number($("#fizzbuzz2").val());

    //Restrict button
    if (fizzbuzz1 === "" || fizzbuzz2 === "") {
        swal("Oops, something went wrong!", "Please enter two numbers greater than zero.", "warning");
        return;
    }
    if (fizzbuzz1 === 0 || fizzbuzz2 === 0) {
        swal("Oops, something went wrong!", "Please enter two numbers greater than zero.", "warning");
        return;
    }

    //Do something
    var output = "", x, y, loop;
    for (var loop = 1; loop <= 100; loop++) {
        //Go through loop and find modulus = 0
        x = loop % fizzbuzz1 === 0;
        y = loop % fizzbuzz2 === 0;
        //if/else statement
        if (x && y) {
            output += "FizzBuzz".fontcolor("red");
        }
        else if (y) {
            output += "Buzz".fontcolor("blue");
        }
        else if (x) {
            output += "Fizz".fontcolor("green");
        }
        else {
            output += loop;
        }
        output += "\n";
    }

    //Output
    $("#p3").html(output);
});
//END EXERCISE THREE

//EXERCISE FOUR
$("#Ex4").click(function () {
    //User Input
    var palin1 = $("#palin1").val();

    //Restrict button
    if (palin1 === "") {
        swal("Oops, something went wrong!", "Please enter a word.", "warning");
        return;
    }

    //Do something
    //First output to compare
    var output1 = palin1.toLowerCase();

    //Reverse a string
    var output2 = palin1.split("").reverse().join("").toLowerCase();

    //compare the outputs in if/else statement
    if (output1 == output2) {
        $("#p4").text("This is a Palindrome.");
    }
    else {
        $("#p4").text("This is not a Palindrome.");
    }
});
//END EXERCISE FOUR

//BONUS EXERCISES

//EXERCISE FIVE
$("#Ex5").click(function () {
    //User Input
    var stralpha = $("#stralpha").val().toLowerCase();

    //Restrict button
    if (stralpha === "") {
        swal("Oops, something went wrong!", "Please enter a word.", "warning");
        return;
    }

    //JS function
    var word = stralpha.split("").sort().join("");

    //Output
    $("#p5").text("Here is the alphabetical order of your word: " + word);
});

//END EXERCISE FIVE

//EXERCISE SIX
$("#Ex6").click(function () {
    var CapLetters = $("#CapLetters").val();

    //Code
    var array1 = CapLetters.split(' ');
    var newarray1 = [];
    //For loop goes through letters and finds
    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    output = newarray1.join(' ');

    //Output
    //Restrict button
    if (output == "") {
        swal("Oops, something went wrong!", "Please enter a sentence.", "warning");
        return;
    }
    else {
        $("#p6").text(output);
    }
});

//END EXERCISE SIX

//EXERCISE SEVEN
$("#Ex7").click(function () {
    //User input
    var vowels = $("#vowels").val().toLowerCase();

    //Restrict button
    if (vowels == "") {
        swal("Oops, something went wrong!", "Please enter a word.", "warning");
        return;
    }

    //Code to find vowels
    var letter = "";
    var output = "";
    var hits = 0;
    var allVowels = ["a", "e", "i", "o", "u"];
    for (loop = 0; loop < vowels.length; loop++) {
        letter = vowels.substr(loop, 1);
        if (allVowels.indexOf(letter) > -1) {
            hits += 1;
            output += letter;
        }
        //else if (output = "") {
        //    output += "Please enter a word with vowels.";
        //}
    }

    //Output
    if (hits == 0) {
        swal("Oops, something went wrong!", "Please enter a word with vowels.", "warning");
    }
    else {
        $("#p7").text("Here is a list of the vowels in your word: " + output);
        $("#p8").text("Here is the number of vowels in your word: " + hits);
    }

});

//END EXERCISE SEVEN

//EXERCISE EIGHT
$("#Ex8").click(function () {
    //User input
    var prime = Number($("#prime").val());

    //Restrict button
    if (prime == "") {
        swal("Oops, something went wrong!", "Please enter a number greater than zero.", "warning");
        return;
    }

    //Variables
    var isPrime = true;
    var output = "";
    //Do something
    for (var loop = prime - 1; loop > 1; loop--) {
        if (prime % loop === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && prime !== 1 && prime !== 0) {
        output += "Your number is prime.";
    }
    else {
        output += "Your number is not prime.";
    }

    //Output
    $("#p9").text(output);
});

//END EXERCISE EIGHT

//EXERCISE NINE

//WON'T ACCEPT OPERATOR INPUT FROM USER, SAYS IT'S INVALID???
//$("#Ex9").click(function () {
//    //User Input
//    var numbr1 = Number($("#numbr1").val());
//    var numbr2 = Number($("#numbr2").val());
//    var operator = $("#operator").val();

//    //Restrict user input
//    if (numbr1 == "" || numbr2 == "" || operator == "") {
//        swal("Oops, something went wrong!", "Please enter valid info.", "warning")
//        return;
//    }

//    if (operator != "+" || operator != "-" || operator != "*" || operator != "/") {
//        swal("Oops, something went wrong!", "Please enter a valid operator.", "warning")
//        return;
//    }

//    //Variables
//    var sum = numbr1 + numbr2;
//    var sub = numbr1 - numbr2;
//    var mult = numbr1 * numbr2;
//    var div = numbr1 / numbr2;

//    //Add
//    if (operator == "+") {
//        $("#p10").text(sum);
//    }

//    //Subtract
//    else if (operator == "-") {
//        $("#p10").text(sub);
//    }

//    //Multiply
//    else if (operator == "*") {
//        $("#p10").text(mult);
//    }

//    //Divide
//    else if (operator == "/") {
//        $("#p10").text(div);
//    }

//    else {
//        swal("Oops, something went wrong!", "Could not calculate inputs.", "warning")
//        return;
//    }
//})

$("#Ex9sum").click(function () {
    //User Input
    var numbr1 = Number($("#numbr1").val());
    var numbr2 = Number($("#numbr2").val());

    //Restrict user input
    if (numbr1 == "" || numbr2 == "") {
        swal("Oops, something went wrong!", "Please enter two numbers.", "warning")
        return;
    }

    //Sum
    var sum = numbr1 + numbr2;

    //Output
    $("#p10").text(sum);
})

$("#Ex9sub").click(function () {
    //User Input
    var numbr1 = Number($("#numbr1").val());
    var numbr2 = Number($("#numbr2").val());

    //Restrict user input
    if (numbr1 == "" || numbr2 == "") {
        swal("Oops, something went wrong!", "Please enter two numbers.", "warning")
        return;
    }

    //Subtract
    var sub = numbr1 - numbr2;

    //Output
    $("#p10").text(sub);
})

$("#Ex9mult").click(function () {
    //User Input
    var numbr1 = Number($("#numbr1").val());
    var numbr2 = Number($("#numbr2").val());

    //Restrict user input
    if (numbr1 == "" || numbr2 == "") {
        swal("Oops, something went wrong!", "Please enter two numbers.", "warning")
        return;
    }

    //Multiply
    var mult = numbr1 * numbr2;

    //Output
    $("#p10").text(mult);
})

$("#Ex9div").click(function () {
    //User Input
    var numbr1 = Number($("#numbr1").val());
    var numbr2 = Number($("#numbr2").val());

    //Restrict user input
    if (numbr1 == "" || numbr2 == "") {
        swal("Oops, something went wrong!", "Please enter two numbers.", "warning")
        return;
    }

    //Divide
    var div = numbr1 / numbr2;

    //Output
    $("#p10").text(div);
})

//END EXERCISE NINE

//EXERCISE TEN
var h2 = document.getElementById('MKCclock');

// display current time by the second
var currentTime = setInterval(function () {
    var date = new Date();
    var hours = (12 - (date.getHours()));
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    //convert military time to standard time

    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }

    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

}, 1000);


/*functions to get hour, min, secs, am or pm, add zero,
  set alarm time and sweet alert, clear alarm */

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}

function hoursMenu() {
    var select = document.getElementById('MKCalarmhrs');
    var hrs = 12

    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
hoursMenu();

function minMenu() {
    var select = document.getElementById('MKCalarmmins');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu() {
    var select = document.getElementById('MKCalarmsecs');
    var sec = 59;

    for (i = 0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

function alarmSet() {
    var hr = document.getElementById('MKCalarmhrs');
    var min = document.getElementById('MKCalarmmins');
    var sec = document.getElementById('MKCalarmsecs');
    var ap = document.getElementById('MKCampm');
    
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('MKCalarmhrs').disabled = true;
    document.getElementById('MKCalarmmins').disabled = true;
    document.getElementById('MKCalarmsecs').disabled = true;
    document.getElementById('MKCampm').disabled = true;
    
    //when alarmtime is equal to currenttime then play a sound
    var h2 = document.getElementById('MKCclock');

    /*function to calcutate the current time then compare it to 
    the alarmtime and show sweet alert when they are equal */

    setInterval(function () {
        var date = new Date();
        var hours = (12 - (date.getHours()));
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
        
        //convert military time to standard time

        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = hours;
        }

        var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
        
        if (alarmTime == currentTime) {
            swal("ALARM!", "ALARM ALARM ALARM", "info")
            return;
        }
    }, 1000);
}

function alarmClear() {
    document.getElementById('MKCalarmhrs').disabled = false;
    document.getElementById('MKCalarmmins').disabled = false;
    document.getElementById('MKCalarmsecs').disabled = false;
    document.getElementById('MKCampm').disabled = false;
}

//END EXERCISE TEN

//CLEAR BUTTONS
$(".ExClr").click(function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");
    $("#factnum").val("");
    $("#fizzbuzz1").val("");
    $("#fizzbuzz2").val("");
    $("#palin1").val("");
    $("#palin2").val("");
    $("#stralpha").val("");
    $("#CapLetters").val("");
    $("#vowels").val("");
    $("#prime").val("");
    $("#numbr1").val("");
    $("#numbr2").val("");

    $("#p1").text("");
    $("#p2").text("");
    $("#p3").text("");
    $("#p4").text("");
    $("#p5").text("");
    $("#p6").text("");
    $("#p7").text("");
    $("#p8").text("");
    $("#p9").text("");
    $("#p10").text("");
});

//RESTRICT USER INPUT USING ALPHANUM

//RESTRICT LETTERS
$(".numeric").numeric();
//RESTRICT NUMBERS
$(".alphaOnly").alpha();
$(".posnumeric").numeric({
    allowMinus: false,
    maxDecimalPlaces: 0,
    min: 1
});

//JS SYNTAX HIGHLIGHTER
$("#showCode1").click(function () {
    $("#preCode1").toggle();
});

$("#showCode2").click(function () {
    $("#preCode2").toggle();
});

$("#showCode3").click(function () {
    $("#preCode3").toggle();
});

$("#showCode4").click(function () {
    $("#preCode4").toggle();
});

$("#showCode5").click(function () {
    $("#preCode5").toggle();
});

$("#showCode6").click(function () {
    $("#preCode6").toggle();
});

$("#showCode7").click(function () {
    $("#preCode7").toggle();
});

$("#showCode8").click(function () {
    $("#preCode8").toggle();
});

$("#showCode9").click(function () {
    $("#preCode9").toggle();
});

$("#showCode10").click(function () {
    $("#preCode10").toggle();
});

//C# SYNTAX HIGHLIGHTER

$("#showCSCode1").click(function () {
    $("#preCSCode1").toggle();
});

$("#showCSCode2").click(function () {
    $("#preCSCode2").toggle();
});

SyntaxHighlighter.all();