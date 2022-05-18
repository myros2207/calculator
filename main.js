function load(){
    document.getElementById("sumaButton");
    sumaButton.addEventListener("click", sum);
    document.getElementById("minusButton");
    minusButton.addEventListener("click", minus);
    document.getElementById("mnozeniaButton");
    mnozeniaButton.addEventListener("click",mnozenia);
    document.getElementById("dzieleniaButton");
    dzieleniaButton.addEventListener("click", dzielenia);
}

function sum() {
    let calc = {
        a : document.getElementById("firstnumber" ).value,
        b : document.getElementById("secondnumber" ).value,
    };
    //   let a, b;
    //
    //
    // a = document.getElementById("firstnumber").value;
    // b = document.getElementById('secondnumber').value;


    let numerA = parseInt(calc.a);
    let numerB = parseInt(calc.b);

    let wynik = numerA + numerB;




    let result = document.getElementById("odpowiedz");
    result.innerHTML = "suma " + wynik;

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


