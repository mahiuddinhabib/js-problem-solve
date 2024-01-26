/*
Task: Review this JavaScript code . The function mysteryFunctionX takes a number
 as input and creates an array representing a mysterious sequence up to that number. 
 Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?
    function mysteryFunctionX(limitX) {
    const sequenceX = [1];
    for (let x = 1; x <= limitX; x++) {
    sequenceX[x] = x * sequenceX[x - 1];
        }
        return sequenceX;
    }
*/

const factorialSeq = (limit) =>{
    let sequence = [1];

    for (let i = 1; i <= limit; i++) {
        sequence[i] = sequence[i-1]*i;
    }
    return sequence;
}


console.log(factorialSeq(5));;