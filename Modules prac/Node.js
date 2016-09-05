//Usually want to break up code into different files to better organize
//All movie related code can go here


function printAvengers(){
    console.log("Avengers: A");
}

function printABCD(){
    console.log("ABCD:U/A");
}

//What gets exported is determined by 'module.exports' variable
module.exports.avengers = printAvengers;