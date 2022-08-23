document.getElementById('Button1').addEventListener('click', function () {
    const playerName = getPlaayer('playerName1');
    setPlayer(playerName, 'Button1');
})
document.getElementById('Button2').addEventListener('click', function () {
    const playerName = getPlaayer('playerName2');
    setPlayer(playerName, 'Button2');
})
document.getElementById('Button3').addEventListener('click', function () {
    const playerName = getPlaayer('playerName3');
    setPlayer(playerName, 'Button3');
})
document.getElementById('Button4').addEventListener('click', function () {
    const playerName = getPlaayer('playerName4');
    setPlayer(playerName, 'Button4');
})
document.getElementById('Button5').addEventListener('click', function () {
    const playerName = getPlaayer('playerName5');
    setPlayer(playerName, 'Button5');
})
document.getElementById('Button6').addEventListener('click', function () {
    const playerName = getPlaayer('playerName6');
    setPlayer(playerName, 'Button6');
})
document.getElementById('Button7').addEventListener('click', function () {
    const playerName = getPlaayer('playerName7');
    setPlayer(playerName, 'Button7');
})
document.getElementById('Button8').addEventListener('click', function () {
    const playerName = getPlaayer('playerName8');
    setPlayer(playerName, 'Button8');
})
document.getElementById('Button9').addEventListener('click', function () {
    const playerName = getPlaayer('playerName9');
    setPlayer(playerName, 'Button9');
})

document.getElementsByClassName('closeAlert')[0].addEventListener('click', function () {
    alertMsgClose();
})

document.getElementById('closeAlert').addEventListener('click', function () {
    alertMsgClose();
})