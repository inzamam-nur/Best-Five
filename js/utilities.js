function getPlaayer(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
}
function alertMsgShow() {
    const element = document.getElementById('errorMsg');
    element.classList.remove('hidden');
}

function alertMsgClose() {
    const element = document.getElementById('errorMsg');
    element.classList.add('hidden');
}


function setPlayer(playerName, buttonId) {
    const NumberOfPlayer = document.querySelectorAll('#playerList li');
    if (NumberOfPlayer.length <= 4) {
        const msgOfflement = document.getElementById('errorPlayerList');
        msgOfflement.classList.add('hidden');
        const ul = document.getElementById('playerList');
        const li = document.createElement('li');
        li.innerText = playerName;
        ul.appendChild(li);
        const buttonDisable = document.getElementById(buttonId); 
        buttonDisable.classList.add('cursor-not-allowed', 'bg-gray-500');
        buttonDisable.disabled = 'true';
    }
    else {
        alertMsgShow();
    }
 

}
function wrongInputMsgShow() {
    const element = document.getElementById('wronginput');
    element.classList.remove('hidden');
}

function wrongInputMsgClose() {
    const element = document.getElementById('wronginput');
    element.classList.add('hidden');
}
function getInputFieldValue(inputId) {
    const valueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function getTextFieldValue(inputId) {
    const valueString = document.getElementById(inputId).innerText;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function setTextFieldValue(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)) {
        getField.innerText = '0000';
        wrongInputMsgShow();
    }
    else if (newText === 0) {
        getField.innerText = '0000';
    }
    else {
        getField.innerText = newText;
        wrongInputMsgClose();
    }
}
