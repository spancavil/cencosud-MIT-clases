//Add function
function dateEmitter(date: Date,person?: string): string {
    return `Hello ${person || "guest"}! today is: ${date.toDateString()}.`
}

//Call function
const response = dateEmitter(new Date(), "Florencia")
console.log(response);

let nombre: string | number = "Sebastian"
nombre = 89

