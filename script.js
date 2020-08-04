// Matching Pin & the Number
function pinScreenNumberCheck(){
    let  generatedPin = document.getElementById("generatedPin").value;
    let screen = document.getElementById("screen").value;
    if (generatedPin == screen){
        matchedOrNot("pinMatched");
        document.getElementById("pinMismatched").style.display = "none";
    }
    else{
        matchedOrNot("pinMismatched");
        document.getElementById("pinMatched").style.display = "none";
        const tryLeft = document.getElementById("tryLeft").innerText;
        let tryRemaining = tryLeft - 1;
        document.getElementById("tryLeft").innerText = tryRemaining;
        if(tryRemaining == 0){
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.backgroundColor = "gray";
        }
    }
}
// Pin and Screen matched or not function
function matchedOrNot(isMatched){
    let pinMismatched = document.getElementById(isMatched);
    pinMismatched.style.display = "block";
}
// Random Number Generate Function
function pinGenerate(max , min){           
    min = Math.ceil(min);
    max = Math.floor(max);
    let pinInput = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("generatedPin").value = pinInput;
}
// Add Value
function putInput(add){
    screenArea.screen.value += add;
}
// Remove All Values
function clearAllValue(){
    screenArea.screen.value = "";
}
// Remove Value One By One
function clearValueOneByOne(){
    let number = screenArea.screen.value;
    let clearValue = number.slice(0 , -1);
    screenArea.screen.value = clearValue;
}