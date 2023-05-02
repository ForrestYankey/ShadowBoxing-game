//computer selects three options from [left, right, up, or down]
function computerSelection() {
    let array = ["up", "down", "left", "right"];
    let punch1 = array[Math.floor(Math.random() * array.length)];
    let punch2 = array[Math.floor(Math.random() * array.length)];
    let punch3 = array[Math.floor(Math.random() * array.length)];
    console.log(punch1, punch2, punch3);
}

computerSelection();

//Single Round
//Player inputs their choice of directions to punch
//compare player choice to computer choice and output points or knockout

//Player inputs their choice of directions to dodge
//compare player choice to computer choice and output points or knockout


//Full game
//Loop single round until knockout or either player or computer gets 11 points.