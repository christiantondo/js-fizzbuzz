console.log("JS on")

for (let i = 1; i <= 100; i++) {

    let contenuto = i;

    if (i % 15 == 0) {
        contenuto = `FizzBuzz`;

    } else if (i % 3 == 0) {
        contenuto = `Fizz`;

    } else if (i % 5 == 0) {
        contenuto = `Buzz`;
        
    }

}

console.log("Ciclo terminato");