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
