"use strict";

//  codice che  stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    const container = document.querySelector(".container");
    const elementNumb = document.createElement("div");
    elementNumb.classList.add("elementoNumb");

    if(( i % 3 == 0 ) && ( i % 5 == 0 )){
        // Stampa FizzBuzz se multiplo di 3 e 5
        console.log("FizzBuzz");
    }
    else if( i % 3 == 0 ){
        // Stampa Fizz se multipplo di 3
        console.log("Fizz");
    }
    else if( i % 5 == 0 ){
        // Stampa Buzz se multipplo di 5
        console.log("Buzz");
    }
    else{
        // se non è multipplo di 3 e 5
        console.log(i);
    }
    elementNumb.append(i);
    container.append(elementNumb);
}