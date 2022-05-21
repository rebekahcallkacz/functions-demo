//// HTML REFERENCES 
// Get reference to button
const button = d3.select("#click-me");
// Get reference to the input element
const inputField = d3.select("#input-field");

//// EVENT FUNCTIONS //// 
// Print out a message when the click occurs
function handleClick() {
    console.log('this was clicked');
};

// Print out input
function handleInput() {
    const inputRaw = d3.event.target.value;
    const inputParsed = parseInt(inputRaw);
    const playerName = getPlayerNameByPlayerId(inputParsed);
    console.log(playerName);
;}

//// EVENT LISTENERS ////
// Listen for button click
button.on("click", handleClick);
// Listen for input field change
inputField.on("change", handleInput);