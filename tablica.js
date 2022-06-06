function funkcjaTablica(){

    let paragraph = document.getElementById("paragraph");
    let reverse = document.getElementById("reverse");
    let two = document.getElementById("dwieLiczby");
    let sriednia;
    let number = [4, 10, 33, 23, 13, 303, 233, 23013, ]
    let suma = 0
    for (let i = 0; i < number.length; i ++){
        suma += number[i]
        sriednia = suma / number.length;
        paragraph.textContent += number[i] +", ";

    }
    console.log(suma)
  console.log(sriednia)

    for (i= number.length - 1; i >= 0; i--){
        reverse.innerText += number[i] + ",  "

    }

    for (let i = 0; i < number.length; i+=2){

        two.innerText +=  number[i]+ ",  "
    }
}

