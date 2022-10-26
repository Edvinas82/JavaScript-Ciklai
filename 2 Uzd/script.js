let pradzia = +prompt("Įveskite nuo kurio skaičiaus pradėti");
let pabaiga = +prompt("Įveskite iki kurio skaičiaus darytiti");
let d = +prompt("Įveskite kas kelis vienetus skaičius didėja ");
let atsakymas = +pradzia + +pabaiga;
let suma = 0;

for (let i = pradzia; i < pabaiga; i *= d) {
    console.log(i);
    
}