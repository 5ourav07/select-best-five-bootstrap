// append player list function
function appendPlayers(player, button) {
    const playerID = document.getElementById(player);
    const playerName = playerID.innerText;

    //player list
    const playerList = document.getElementById('player-list');
    const addList = document.createElement('li');
    addList.innerText = playerName;

    //max 5 players selection condition
    const newPlayerList = playerList.querySelectorAll('li');
    if (newPlayerList.length >= 5) {
        alert("You can't select more than 5 players");
        return;
    }
    else {
        playerList.appendChild(addList);
        // disable button
        document.getElementById(button).setAttribute('disabled', '');
    }
}

document.getElementById('btn-messi').addEventListener('click', function () {
    appendPlayers('player-messi', 'btn-messi');
})

document.getElementById('btn-machado').addEventListener('click', function () {
    appendPlayers('player-machado', 'btn-machado');
})

document.getElementById('btn-mbappe').addEventListener('click', function () {
    appendPlayers('player-mbappe', 'btn-mbappe');
})

document.getElementById('btn-neymar').addEventListener('click', function () {
    appendPlayers('player-neymar', 'btn-neymar');
})

document.getElementById('btn-ramos').addEventListener('click', function () {
    appendPlayers('player-ramos', 'btn-ramos');
})

document.getElementById('btn-sanches').addEventListener('click', function () {
    appendPlayers('player-sanches', 'btn-sanches');
})