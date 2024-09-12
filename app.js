// Array con las rutas de las imágenes
const imagePaths = [
    {"Arquero":"assets/image-selector/arquero.png"},
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

// Obtener la referencia a la imagen, los elementos de las fechas en sus costados y del botón selector
const imgSelector = document.getElementById("img-selector");
const selectButtonRight = document.getElementsByClassName("arrow-right");
const selectButtonLeft = document.getElementsByClassName("arrow-left");
const documentSelector = document.getElementsByClassName("container");

const selectButtonCharacter = document.getElementById("character-selector");

const textInfo = document.getElementById("character-info");
const descriptionElement = document.getElementById("text-description");
const tittleInfo = document.getElementById("main-tittle");
const imageInfo = document.getElementById("image-info");

const buttonBack = document.getElementById("button-back");


console.log(selectButtonCharacter.textContent);
console.log(selectButtonCharacter);

let key = Object.keys(imagePaths[0])
console.log(imagePaths[0][key])

if (currentIndex == 0){
    selectButtonLeft[0].classList.add("selected");
    selectButtonCharacter.textContent = Object.keys(imagePaths[currentIndex]);
}

// Añadir un event listener al botón de selección
selectButtonRight[0].addEventListener("click", () => {
    // Cambiar al siguiente índice de imagen
    currentIndex = currentIndex + 1;
    selectButtonLeft[0].classList.remove("selected");
    selectButtonCharacter.textContent = Object.keys(imagePaths[currentIndex<= imagePaths.length -1 ? currentIndex: imagePaths.length-1]);

    if (currentIndex >= imagePaths.length -1) {
        currentIndex = imagePaths.length -1;
        selectButtonRight[0].classList.add("selected");
    }

    // Cambiar el atributo src de la imagen
    imgSelector.src = imagePaths[currentIndex][Object.keys(imagePaths[currentIndex])];
});


selectButtonLeft[0].addEventListener("click", () => {
    // Cambiar al siguiente índice de imagen
    currentIndex = (currentIndex - 1);
    selectButtonRight[0].classList.remove("selected");
    selectButtonCharacter.textContent = Object.keys(imagePaths[currentIndex >= 0 ? currentIndex: 0]);

    if (currentIndex <= 0) {
        currentIndex = 0;
        selectButtonLeft[0].classList.add("selected");
    }
    // Cambiar el atributo src de la imagen
    imgSelector.src = imagePaths[currentIndex][Object.keys(imagePaths[currentIndex])];
});


selectButtonCharacter.addEventListener("click", () => {
    // Mostrar o ocultar el texto con la descripción de la carta
    const currentCharacter = Object.keys(imagePaths[currentIndex])[0];
    const descriptionText = textContentImages[currentIndex][currentCharacter];

    documentSelector[0].classList.add("visibility");
    textInfo.classList.add("text-visibility");
    
    tittleInfo.textContent = Object.keys(imagePaths[currentIndex])[0];
    descriptionElement.textContent = descriptionText;

    imageInfo.src =  imagePaths[currentIndex][Object.keys(imagePaths[currentIndex])]
});


buttonBack.addEventListener("click", () => {
    documentSelector[0].classList.remove("visibility");
    textInfo.classList.remove("text-visibility");
});