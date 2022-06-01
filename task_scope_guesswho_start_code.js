// GUESS 1 ///////////////////

let guess = {                   //a let object called 'guess'
    hair_colour: "red",
    eye_colour: "blue",
    hat: false,
    glasses: true,
    firstName: "Joseph"
};

const guessWho = function(){     // a constant variable called guessWho =  function
    return `Guess who is ${guess.firstName}`;    //returns firstName from object guess 
};

const finalAnswer = guessWho();  // a constant variable called finalAnswer = guessWho function  
console.log(finalAnswer);

// prediction: firstname = "Joseph" 



// GUESS 2 ///////////////////

let firstName = "Donna";

const guessWho = function(){
    const glasses = false;
    let firstName = "Liz";
    return `Guess Who is ${firstName}.`;
}

const guess1 = guessWho();
console.log("guess1: ", guess1);

const guess2 = `Guess Who is ${firstName}`;
console.log("guess2: ", guess2);

// prediction- guess 1: Liz , guess 2: Donna



//// GUESS 3 ///////////////////

const guess = {
    hair_colour: "black",
    eye_colour: "brown",
    hat: false,
    glasses: false,
    firstName: "Andy"
}

const changeHat = function(){
    guess.hat = !guess.hat;  //  guess.hat = !false --> guess.hat = true;
}

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,       
// glasses: false,
// firstName: "Andy"


const changeGuess = function(newName){
    guess.firstName = newName;  //reassign firstname = newName
}

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,       
// glasses: false,
// firstName: "newName"


const guessWho = function(){
    return `Guess Who is ${guess.firstName}` 
}
// hair_colour: "black",
// eye_colour: "brown",
// hat: true,       
// glasses: false,
// firstName: "newName"

changeHat();

if(guess.hat){  //if guess.hat = true 
    changeGuess("Chris"); //change guess to Chris
}

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,       
// glasses: false,
// firstName: "Chris"


const finalAnswer = guessWho();
console.log(finalAnswer);

// prediction: Guess Who is Chris 


// // GUESS 4 ///////////////////

let firstName = "Gail";

if ( firstName === "Gail"){
    let firstName = "Ashley";
}

const guessWho = function(){
    return `Guess Who is ${firstName}`
}

const finalAnswer = guessWho();
console.log(finalAnswer);

//Prediction: Guess Who is Gail 

// // GUESS 5 ///////////////////

const guess = {
    hair_colour: "blonde",
    eye_colour: "brown",
    hat: false,
    glasses: false,
    firstName: "Jennifer"
}

const changeGuess = function(){
    guess = {
        hair_colour: "blonde",
        eye_colour: "blue",
        hat: false,
        glasses: false,
        firstName: "Kyle"   
    }
}

changeGuess();
console.log(`Guess Who is ${guess.firstName}`);

//prediction - error because reassigning constant variable- constant variable never changes 
//though you can change individual items (value of keys inside object, e.g. guess.firstname) 
