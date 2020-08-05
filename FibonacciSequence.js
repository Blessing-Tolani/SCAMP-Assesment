let genFibonacciSeq = () => {
    do{
        seqlength = +prompt("Enter a positive number to Generate Fibonacci Sequence");
    }
    while (isNaN(seqlength) || seqlength <= 0);

    fibonacciSeq = [0,1];
    seqlength -= fibonacciSeq.length;
    
    for (i=0; i < seqlength; i++){
        sum = fibonacciSeq[i] + fibonacciSeq[i+1];
        fibonacciSeq.push(sum);
    }
    return fibonacciSeq;
}
var answer = genFibonacciSeq();
document.write(`Fibonacci Sequence: ${answer}`);

