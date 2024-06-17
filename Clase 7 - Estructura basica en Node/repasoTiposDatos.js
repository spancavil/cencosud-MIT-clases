//Primitivos
const booleano = false
const edad = 25
const name = "Genesis"

//Array y objetos
const names = ["Sebastian", "Gabriela", "Genesis", "Roberto"]
console.log(names[2]) //Genesis
console.log(names.length)
names[3] = "Julian"
console.log(names[10]) //Undefined

const persona1 = {
    name: "Hector",
    edad: 19,
    saludar: () => "hola!"
}
console.log(persona1.name)

//Operadores booleanos
console.log(true && false) //false
console.log(true || false) //true
const nameVacio = ""
//Valores falsies: "", 0, null, undefined, NaN (not a number)
//Valores truthies: el resto

//Bloques if else

const arrayVacio = []
if (nameVacio) {
    console.log("Bloque if");
} else {
    console.log("Bloque else"); //Entra aqui
}

if (arrayVacio) {
    //Entra aqui
} else {
}


//Bucles for
//Array
for (const name of names) {
    console.log(name);
}

for (let index = 0; index < names.length; index++) {
    const element = names[index]; 
    console.log(element);
}