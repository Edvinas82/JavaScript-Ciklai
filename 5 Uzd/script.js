pradzia = +prompt ("Įveskite skaičių");
pabaiga = +prompt ("Įveskite skaičių");
skaicius = +prompt ("Įveskite skaičių");
console.log(arLyginis(skaicius));

function arLyginis(skaicius) {
    if (skaicius % 2 == 0) {
        return true;
    }else{
        return false;
    }   
}

function visiLyginiai(skaicius) {
    for (let i = pradzia; i < pabaiga; i++) {
        console.log(i);  
    }
}