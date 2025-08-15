document.getElementById('gameSettingsForm').addEventListener('submit', function(event){
    event.preventDefault()
    const players = +document.getElementById('players').value
    const timer = +document.getElementById('timer').value
    const spy = getRandomInt(1, players)
    console.log(players,timer,spy)

    localStorage.setItem('gameSettings', JSON.stringify({
        players,
        timer,
        spy
    }));
    
    window.location.href = 'game.html';

})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


