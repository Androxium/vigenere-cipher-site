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

/* This function will determine the appropriate letters to decode the message. */
function decodeMessage(){
    let keyIndex = 0;
    let returnMessage = [];
    for (i = 0; i < message.length; i++){
        if (keyIndex > key.length-1){
            keyIndex = 0;
        }
        let letterIndex = keyArray[keyIndex].indexOf(message.charAt(i));
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

/* This function will set 'key' and 'message' to their respected input values. */
function onClickFunc(){
    key = document.getElementById('key-input').value.trim().toUpperCase();
    message = document.getElementById('message-input').value.trim().toUpperCase();

    if (key == "" || message == ""){
        alert("Please enter String values in the text fields.");
        return (false);
    }
    return (true);
}

/* This function will determine the appropriate letters to encode the message. */
function encodeMessage(){
    let returnMessage = [];
    let keyIndex = 0;
    for (i = 0; i < message.length; i++){
        if (keyIndex > (key.length-1)){
            keyIndex = 0;
        }
        let currentColumn = message.charCodeAt(i) - 65;
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

/* This function will generate the array of scrambled letters used encode or decode the user's message. */
function generateKeyList(){
    let iteration = key.length;
    for (i = 0; i < iteration; i++){
        let tempList = [];
        let currentLetter = key.charCodeAt(i);
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