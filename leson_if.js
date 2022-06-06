
function funkcja() {
    let rok = document.getElementById("wiek").value;

    let wynik = 2022-rok;

    let zaimek = " ";

    if(document.getElementById("zaimek_on").checked) {

        zaimek =  "on";
    }
    else if (document.getElementById("zaimek_ona").checked) {
        zaimek = "ona";
    }

    else {
        zaimek = "inny"
    }
    if (wynik < 18 && zaimek=="on") {
        console.log("jesteś niepełnoletni");
    }

    else if (wynik< 18 && zaimek=="ona") {
        console.log("jesteś niepełnoletna");
    }
    else if (wynik < 18 && zaimek=="inny") {
        console.log("jesteś niepełnoletno");
    }
    else  {
        console.log("można już")
    }

//    4


    if( wiek < 18 ){

        if (zaimek == "on"){
            console.log("jesteś niepełnoletni")

        }

    }

}