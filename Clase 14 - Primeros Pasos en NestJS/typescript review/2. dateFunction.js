//Add function
function dateEmitter(date, person) {
    return "Hello ".concat(person || "guest", "! today is: ").concat(date.toDateString(), ".");
}
//Call function
var response = dateEmitter(new Date(), "Florencia");
console.log(response);
