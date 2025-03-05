const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordReading = document.querySelector('.password-container h1');

//Función para actualizar el tamaño de la contraseña
const handleChange = () =>{
    lenghtCounter.textContent = inputRange.value;
};

const generatePassword = (passwordLenght) =>{
    let result = "";
    let characters = "";

//Obtener las opciones seleccionadas
    const usedUpperCase = document.querySelector("#uppercase").checked;
    const usedLowerCase = document.querySelector("#lowercase").checked;
    const usedNumbers = document.querySelector("#numbers").checked;
    const usedSymbols = document.querySelector("#symbols").checked;

//Creamos un conjunto de carácteres a usar en la contraseña
if(usedUpperCase) characters +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(usedLowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
if(usedNumbers) characters += "0123456789";
if(usedSymbols) characters += "!@#$%&*+";

// En caso de que sea vacio
if(characters === ""){
    passwordReading.textContent = "Selecciona al menos una opción";
    return "";
}

//Generador de contraseña aleatoria
for(let i=0; i<passwordLenght; i++){
    result += characters.charAt(Math.floor(Math.random()*characters.length));
}
return result;
};

//Función que imprima la contraseña
const printPassword = (e)=>{
    e.preventDefault(); //Prevenir el evento por Default
    const password = generatePassword(inputRange.value);//Genera la contraseña
    if(password){
        passwordReading.textContent = password;//Muestra la contraseña generada
    }
};

//Configuración de los eventos
inputRange.addEventListener("input", handleChange);
generateBtn.addEventListener("click", printPassword);

//Agregando la función de copiar la contraseña en el portapepeles
const copiarBtn = document.querySelector("#copiarBtn");

const copiarAlPortapapeles = () => {
    const password = passwordReading.textContent; // Obtener la contraseña generada
    if (!password || password === "Selecciona al menos una opción") {
        alert("No hay una contraseña válida para copiar.");
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        alert("Contraseña copiada al portapapeles ✅");
    }).catch(err => console.error("Error al copiar:", err));
};

// Evento para copiar la contraseña
copiarBtn.addEventListener("click", copiarAlPortapapeles);