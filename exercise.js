// Exercise 1:
// Write or describe an algorithm that prints the whole integer numbers to the console, start
// from the number 1, and print all numbers going up to the number 100.

// However, when the number is divisible by 3, do not print the number, but print the word
// 'Visual'. 
//If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
// all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

const divBy3 = "Visual";
const divBy5 = "Nuts";

const validarNumero = (i) => {
    if( i % 5 === 0 && i % 3 === 0) {
        console.log(`${divBy3} ${divBy5}`)
    }else if( i % 5 === 0){
        console.log(divBy5)
    }else if (i % 3 === 0){
        console.log(divBy3)
    } else {
        console.log(i);
    } 
}

for (let i = 1; i <= 500; i++) {
    validarNumero(i);
}

// How will you keep this code safe from bugs? Show how you would guarantee that this code
// keeps working when developers start making small feature adjustments. (Maybe we would
// want to print the first 500 numbers, ...).

/* 
So, to test full code coverage. I would need to test all situations. So i need a number which matches each requirement.

test cases: 3, 5, 15, 4

Let's say, I want to test for the first use case. 15 would be a number which is multiple of 3 and 5.
It would match both conditions, the reminder of the division would be 0 and the if statement would stop there.
Output: Visual Nuts

If first condition doesn't match. it would check if it's divisible by 5. So,we can test that with the number 5.
Output: Nuts

If it doesn't match, then it would check if it's divisible by 3. So,we can test that with the number 3.
Output: Visual

If any of the scenarios above will be matched, then it will just print the number. If we try number 4 for example.
Output: 4, the number itself.

*/