// Array con las rutas de las imágenes
const imagePaths = [
    {"Arquero":"assets/image-selector/arquero.png"},
    {"Bruja Nocturna":"assets/image-selector/bruja.png"},
    {"Caballero":"assets/image-selector/caballero.png"},
    {"Dragón":"assets/image-selector/dragon.png"},
    {"Goblin":"assets/image-selector/goblin.webp"},
    {"Golem":"assets/image-selector/golem.png"},
    {"Los Pillos":"assets/image-selector/los-pillos.png"},
    {"Minero":"assets/image-selector/Miner_info.webp"},
    {"Monta Puercos":"assets/image-selector/montaPuercos.webp"},
    {"Pekka":"assets/image-selector/Pekka.webp"},
    {"Principe":"assets/image-selector/Principe.png"}
];


const textContentImages = [
    {"Arquero":"Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5."},

    {"Bruja Nocturna":"es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha."},

    {"Caballero":"Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria."},

    {"Dragón":"Es una carta de rareza de Clash Royale que puede obtenerse a partir de la arena 1. Dragón es una carta de ataque que puede ser usada para tropas más grandes como los Bárbaros y los Pícaros. Además, es común en mazos de Bait junto a la Valquiria."},

    {"Goblin":"es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior."},

    {"Golem":"Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3."},

    {"Los Pillos":"Está formada por dos 'niñas pillas' y un 'niño pillo', el cual tiene la función de defender a sus amigas mientras estas lanzan 'chicles' a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo."},

    {"Minero":"Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal."},

    {"Monta Puercos":"Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro."},

    {"Pekka":"Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe."},

    {"Principe":"Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo."}
];


// Inicializar el índice de la imagen a 0
let currentIndex = 0;

// Obtener referencias a los elementos HTML
const documentSelector = document.getElementsByClassName("container")[0];
const imgSelector = document.getElementById("img-selector");
const selectButtonRight = document.getElementsByClassName("arrow-right")[0];
const selectButtonLeft = document.getElementsByClassName("arrow-left")[0];
const selectButtonCharacter = document.getElementById("character-selector");

// Obtener referencias a los elementos HTML del contenedor descriptivo
const textInfo = document.getElementById("character-info");
const tittleInfo = document.getElementById("main-tittle");
const descriptionElement = document.getElementById("text-description");
const imageInfo = document.getElementById("image-info");
const buttonBack = document.getElementById("button-back");

/*
console.log(selectButtonCharacter.textContent);
console.log(selectButtonCharacter);
let key = Object.keys(imagePaths[0])
console.log(imagePaths[0][key])
*/


// Actualizar la imagen y texto según el índice
function updateCharacterDisplay(index) {
    const characterName = Object.keys(imagePaths[index]);
    const characterImage = imagePaths[index][characterName];

    imgSelector.src = characterImage;
    selectButtonCharacter.textContent = characterName;

    // Actualizar la visibilidad de las flechas
    selectButtonLeft.classList.toggle("selected", index === 0);
    selectButtonRight.classList.toggle("selected", index === imagePaths.length - 1);
}

// Cambiar al siguiente o al anterior personaje
function changeCharacter(direction) {
    currentIndex = Math.max(0, Math.min(imagePaths.length - 1, currentIndex + direction));
    updateCharacterDisplay(currentIndex);
}


// Mostrar la información del personaje seleccionado
function showCharacterInfo() {
    const characterName = Object.keys(imagePaths[currentIndex]);
    const characterDescription = textContentImages[currentIndex][characterName];

    documentSelector.classList.add("visibility");
    textInfo.classList.add("text-visibility");

    tittleInfo.textContent = characterName;
    descriptionElement.textContent = characterDescription;
    imageInfo.src = imagePaths[currentIndex][characterName];
}


// Event listeners para las flechas y los botones
selectButtonRight.addEventListener("click", () => changeCharacter(1));
selectButtonLeft.addEventListener("click", () => changeCharacter(-1));

selectButtonCharacter.addEventListener("click", showCharacterInfo);
imgSelector.addEventListener("click", showCharacterInfo);

buttonBack.addEventListener("click", () => {
    documentSelector.classList.remove("visibility");
    textInfo.classList.remove("text-visibility");
});


// Inicialización
updateCharacterDisplay(currentIndex);