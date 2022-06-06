let tablica = [4,32,11,25,100,12,12,444,10,1]
document.getElementById("nieposortowana"). textContent = tablica;


function sort(){

        let wielkoscTablicy = tablica.length;
        for (let i = 0; i < wielkoscTablicy; i++)
        {
             for (let j = 0; j< wielkoscTablicy - 1; j ++)
             {
                 if ( tablica[j] > tablica[j+1])
                 {
                     let tymczasowa = tablica [j];
                     tablica [j] = tablica [j + 1];
                     tablica[j+1] = tymczasowa;
                 }
             }
        }
        document.getElementById("posortowane").textContent = tablica;
}