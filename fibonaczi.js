function potenga() {


    let i = 0
    let wynik = 1;
    let podstawa = document.getElementById("firstnumber").value;
    let wykladnik = document.getElementById("secondnumber").value;
    while (i < wykladnik) {

        wynik = wynik * podstawa;
        i++;
    }

    console.log(wynik);
}


function fib() {

let a=1;
    let b =1;
    let ostatnia;
    let wynik =""
    let iloscLiczb= document.getElementById("liczba").value;

    for (let i=0; i<iloscLiczb; i++){

        ostatnia = a+b;
        wynik += ostatnia + "<br>";
        a=b;
        b=ostatnia;


        }
    document.getElementById('figa').innerHTML = wynik

    let suma;
    suma = wynik/iloscLiczb;
    document.getElementById('suma').innerHTML = suma;
}








