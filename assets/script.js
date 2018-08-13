// global variables
let key;
let message;
let keyArray = [];

/* This function is the main function for encoding messages. */
function mainEncode(){
    if (onClickFunc()){
        generateKeyList();
        document.getElementById("output-message").innerHTML = encodeMessage();
    }
}

/* This function is the main function for decoding messages. */
function mainDecode(){
    if (onClickFunc()){
        generateKeyList();
        document.getElementById("output-message").innerHTML = decodeMessage();
    }
}

function decodeMessage(){
    var keyIndex = 0;
    var returnMessage = [];
    for (i = 0; i < message.length; i++){
        if (keyIndex > key.length-1){
            keyIndex = 0;
        }
        var letterIndex = keyArray[keyIndex].indexOf(message.charAt(i));
        if (letterIndex === -1){
            returnMessage.push(' ');
        }
        else{
            returnMessage.push(String.fromCharCode(65+letterIndex));
            keyIndex++;
        }
    }
    return (returnMessage.join(''));
}

function onClickFunc(){
    key = document.getElementById('key-input').value.trim().toUpperCase();
    message = document.getElementById('message-input').value.trim().toUpperCase();

    if (key == "" || message == ""){
        alert("Please enter String values in the text fields.");
        return (false);
    }
    return (true);
}

function encodeMessage(){
    var returnMessage = [];
    var keyIndex = 0;
    for (i = 0; i < message.length; i++){
        if (keyIndex > (key.length-1)){
            keyIndex = 0;
        }
        var currentColumn = message.charCodeAt(i) - 65;
        // checks to see if the letter is indeed a valid character
        if (currentColumn < 0 || currentColumn > 25){
            returnMessage.push(" ");
            continue;
        }
        returnMessage.push(keyArray[keyIndex][currentColumn]);
        keyIndex++;
    }
    return returnMessage.join('');
}

function generateKeyList(){
    var iteration = key.length;
    for (i = 0; i < iteration; i++){
        var tempList = [];
        var currentLetter = key.charCodeAt(i);
        for (j = 0; j < 26; j++){
            if (currentLetter > 90){
                currentLetter = 65;
            }
            tempList.push(String.fromCharCode(currentLetter));
            currentLetter++;
        }
        keyArray.push(tempList);
    }
}