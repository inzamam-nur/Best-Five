function getPlaayer(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
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
   
}
function getInputFieldValue(inputId) {
    const valueString = document.getElementById(inputId).value;
    if (!/\D/.test(valueString)) {
        const inputValue = parseFloat(valueString);
        return inputValue;
    }
    else {
        worngInputMsgShow();
    }
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
        worngInputMsgShow();
    }
    else if (newText === 0) {
        getField.innerText = '0000';
    }
    else {
        getField.innerText = newText;
        worngInputMsgClose();
    }
}
