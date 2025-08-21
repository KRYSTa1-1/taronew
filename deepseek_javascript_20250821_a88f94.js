// tavet-mel.js - API для карт Таро
const tavotCards = [
    {card: "0 ШУТ", meaning: "Начало нового пути, невинность, спонтанность. Время рисковать!"},
    {card: "I МАГ", meaning: "Сила воли, творчество, мастерство. Ты можешь всё!"},
    {card: "III ИМПЕРАТРИЦА", meaning: "Изобилие, красота, природа. Творчество и плодородие!"},
    {card: "Ⅴ ПЯТЕРКА МЕЧЕЙ", meaning: "Поражение, потеря, бесчестие!"},
    {card: "🪙 ТУЗ ПЕНТАКЛЕЙ", meaning: "Процветание, новые возможности, изобилие!"},
    {card: "💕 ВЛЮБЛЕННЫЕ", meaning: "Любовь, гармония, отношения. Выбор сердца!"},
    {card: "🌙 ЛУНА", meaning: "Иллюзия, страх, подсознание. Посмотри страху в глаза!"},
    {card: "☀️ СОЛНЦЕ", meaning: "Радость, успех, позитив. Солнечные дни впереди!"},
    {card: "⚖️ ПРАВОСУДИЕ", meaning: "Справедливость, правда, карма. Что посеешь, то и пожнешь!"},
    {card: "🏰 БАШНЯ", meaning: "Внезапные изменения, разрушение, откровение. Шок и трепет!"}
];

// функция для получения случайной карты
function getRandomTarot() {
    const randomCard = tavotCards[Math.floor(Math.random() * tavotCards.length)];
    return {
        card: randomCard.card,
        meaning: randomCard.meaning,
        timestamp: new Date().toISOString()
    };
}

// Обработка запросов
if (typeof window !== 'undefined') {
    window.getRandomTarot = getRandomTarot;
}