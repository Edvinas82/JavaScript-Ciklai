let pradzia = +prompt("Įveskite nuo kurio skaičiaus pradėti");
let pabaiga = +prompt("Įveskite iki kurio skaičiaus darytiti");
let sandauga = 0;



function skaiciuSandauga(params) {
    for (let i= 0; i < pabaiga; i++) {
        sandauga *= i;   
    }
    console.log(sandauga);
}