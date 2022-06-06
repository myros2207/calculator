function sort() {

    let tablica = [5, 10, 0, 1, 9, 13];

    let tabSort = Array(tablica.length);

    tabSort[0] = tablica [0];

    for (let i = 0; i < tablica.length; i++) {

        let j = i -1 ;

        while (tablica[i] < tabSort[j] && j>= 0) {
            tabSort[j+1] = tabSort[j ]
            j--;
        }

        tabSort [j+1] = tablica [i]


    }
    document.getElementById("nieposortowana").innerHTML = tablica;
    document.getElementById("posortowana").textContent = tabSort;
}