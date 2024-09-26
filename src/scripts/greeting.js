const greetings = [
    "¡Hola, Viajero!",
    "Hello, Traveler!",
    "Ahoj, cestovateli!",
    "مرحباً أيها المسافر!",
    "Здравей, пътнико!",
    "你好，旅行者！",
    "こんにちは、旅行者の皆さん！",
    "안녕하세요, 여행자 여러분!",
    "Hei, matkustaja!",
    "Hallo, Reisender!",
    "Bonjour, Voyageur !",
    "Γεια σου, ταξιδιώτη!",
    "Ciao, viaggiatore!",
    "Olá, Viajante!",
    "Здравствуй, путешественник!",
    "Привіт, Мандрівнику!",
    "Hej, resenär!",
    "Halo, Traveler!",
    "Tere, Reisija!",
    "Hej, rejsende!",
    "Ahoj, cestovateľ!",
]

/**
 * Returns a random greeting in one of many languages.
 * @returns {string} A random greeting.
 */
export function getGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)]
}