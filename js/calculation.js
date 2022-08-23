document.getElementById('buttonCalculation').addEventListener('click',function(){
    const costPerPlayer = getInputFieldValue('players');
    const numberOfPlayers = document.querySelectorAll('#playerList li');
    const totalPlayerCost = numberOfPlayers.length * costPerPlayer;
    setTextFieldValue('totalPlayerCost', totalPlayerCost);
})

document.getElementById('buttonTotalCost').addEventListener('click', function(){
    const totalPlayerCost = getTextFieldValue('totalPlayerCost');
    const managerCost = getInputFieldValue('managerCost');
    const coachCost = getInputFieldValue('coachCost');
    const totalCost = totalPlayerCost + managerCost + coachCost;
    setTextFieldValue('totalCost', totalCost);
})

document.getElementById('warningClose').addEventListener('click', function () {
    wrongInputMsgClose();
})



