function rysuj() {
    let n = document.getElementById("n").value;
    let wynik ="";
    let leczbaSpacji = n -1;
    let wPrawo = document.getElementById("prawo")


    // for (let h = 0; h >wPrawo; h++) {


        for (let i = 0; i < n; i++) {

            for (let j = 0; j < leczbaSpacji; j++) {

                wynik = wynik + " ";
            }
            leczbaSpacji--;

            let liczba = i * 2 + 1;

            for (let k = 0; k < liczba; k++) {
                wynik = wynik + "+"
            }
            wynik = wynik + "\n";


        }
        leczbaSpacji = n - 1;
        for (i = 0; i < n; i++) {

            for (j = 0; j < leczbaSpacji; j++) {

                wynik = wynik + " ";
            }
            leczbaSpacji = leczbaSpacji + 1;

            liczba = (n - i) * 2 - 1;

            for (let k = 0; k < liczba; k++) {
                wynik = wynik + "="
            }
            wynik = wynik + "\n";


        }



    let kopia = document.getElementById("powtorzenia").value;
    let koniec = wynik.repeat(kopia);

    document.getElementById('trojakt').textContent =  koniec;
}

