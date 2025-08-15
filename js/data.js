document.getElementById('gameSettingsForm').addEventListener('submit', function(event){
    event.preventDefault()
    const players = +document.getElementById('players').value
    const timer = +document.getElementById('timer').value
    const spy = getRandomInt(1, players)
    const place = ["Аэропорт", "Банк", "Бар", "Больница", "Библиотека", "Военная база", "Гостиница", "Дворец", "Зоопарк", "Казино", "Кинотеатр", "Космическая станция", "Круизный лайнер", "Музей", "Офис", "Океанский лайнер", "Остров", "Парк развлечений", "Пляж", "Подводная лодка", "Полицейский участок", "Ресторан", "Рынок", "Самолёт", "Спа-салон", "Стадион", "Супермаркет", "Театр", "Тюрьма", "Университет", "Ферма", "Церковь", "Цирк", "Школа", "Вокзал", "Гавань", "Гараж", "Джаз-клуб", "Завод", "Кафе", "Киностудия", "Кладбище", "Лаборатория", "Метро", "Монастырь", "Небоскрёб", "Оперный театр", "Паб", "Подземелье", "Стройка"]
    const placeIndex = getRandomInt(0,place.length)
    locat = place[placeIndex]
    console.log(spy, location)

    localStorage.setItem('gameSettings', JSON.stringify({
        players,
        timer,
        spy,
        locat
    }));
    
    window.location.href = 'game.html';

})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}