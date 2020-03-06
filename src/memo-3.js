const memoizeFunc = memoizer(generatePrimeNum);

memoizeFunc(10); // the result is still [2, 3, 5]
