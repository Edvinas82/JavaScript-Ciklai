pradzia = +prompt ("Įveskite skaičių");
pabaiga = +prompt ("Įveskite skaičių");
console.log(arLyginis(56));
console.log(arLyginis(-1));
visiLyginiai (pradzia, pabaiga);

function arLyginis(skaicius) {
    if (skaicius % 2 == 0) {
        return true;
    }else{
        return false;
    }   
}

function visiLyginiai(pradzia, pabaiga) {
    for (let i = pradzia; i < pabaiga; i++) { 
        if (arLyginis(i)) {
            console.log (i);
        }
    }
}