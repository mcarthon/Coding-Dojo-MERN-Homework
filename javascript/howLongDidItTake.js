Number.prototype.isPrime = function() {

    for (let i = 2; i < Math.floor(Math.sqrt(this)); ++ i) {

        if (this % i === 0 ) {

            return false;

        }

    }

    return true;

}

const { performance } = require('perf_hooks');

const start = performance.now();

let primeCount = 0;

let num = 2; // for math reasons, 1 is considered prime

while( primeCount < 1e5 ) {

    if( num.isPrime() ) {

        primeCount++;

    }

    num++;

}

console.log(`The 100,000th prime number is ${num-1}`);

console.log(`This took ${performance.now() - start} milliseconds to run`);

while( primeCount < 1e6 ) {

        if( num.isPrime() ) {
    
            primeCount++;
    
        }
    
        num++;
    
    }
    
    console.log(`The 1,000,000th prime number is ${num-1}`);
    
    console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 100,000th prime number is 1296409

// This took 9400.182700000703 milliseconds to run

// The 1,000,000th prime number is 15474959

// This took 315231.7908000052 milliseconds to run    

// Iterative Fibonacci is faster because it makes less calculations
// Recursive Fibonacci makes N call twice whereas the iterative version makes the same calculation once

const story = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis 
molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta 
cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio 
labore asperiores!`;

storyReversed = "";

for (let i = story.length - 1; i > -1; -- i) {

    storyReversed += story[i];

}

console.log(storyReversed);