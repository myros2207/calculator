console.log("ppp")

function load(){
    document.getElementById("sumaButton");
    sumaButton.addEventListener("click", sum);
    document.getElementById("minusButton");
    minusButton.addEventListener("click", minus);
    document.getElementById("mnozeniaButton");
    mnozeniaButton.addEventListener("click",mnozenia);
    document.getElementById("dzieleniaButton");
    dzieleniaButton.addEventListener("click", dzielenia);
    document.getElementById("poteng");
    poteng.addEventListener("click", potenga)
    document.getElementById("realSuml");
    realSuml.addEventListener("click",real());
}

function sum() {

    let a, b;


    a = document.getElementById("firstnumber").value;
    b = document.getElementById('secondnumber').value;


    let numerA = parseInt(a);
    let numerB = parseInt(b);

    let wynik = numerA + numerB;




    let result = document.getElementById("odpowiedz");
    result.innerHTML = "suma " + wynik + " You numer "+numerA;

}

function minus() {

    let a, b;

    a = document.getElementById("firstnumber").value;
    b = document.getElementById('secondnumber').value;


    let numerA = parseInt(a);
    let numerB = parseInt(b);


    let roznica = numerA - numerB;



    let result = document.getElementById("odpowiedz");
    result.innerHTML =  "róznica" + roznica;

}

function mnozenia() {
    let a, b;

    a = document.getElementById("firstnumber").value;
    b = document.getElementById('secondnumber').value;


    let numerA = parseInt(a);
    let numerB = parseInt(b);

    let mnozenia = numerA * numerB;




    let result = document.getElementById("odpowiedz");
    result.innerHTML = "mnozenia" + mnozenia;


}

function dzielenia() {

    let a, b;

    a = document.getElementById("firstnumber").value;
    b = document.getElementById('secondnumber').value;


    let numerA = parseInt(a);
    let numerB = parseInt(b);

    let dzielenia = numerA / numerB;




    let result = document.getElementById("odpowiedz");
    result.innerHTML =  "dzielenia" + dzielenia;


}
function potenga() {


    let i = 0
    let wynik = 1;
    let podstawa = document.getElementById(firstnumber).value;
    let wykladnik = document.getElementById(secondnumber).value;
    while (i < wykladnik) {

        wynik = wynik * podstawa;
        i++;
    }

    document.getElementById("odpowiedz")
}

function real() {

    let numer;
    numer = document.getElementById("youNumer").value;
    let numerC = parseInt(numer);

    let sum = document.getElementById("free")
    sum.innerText=numerC;
}