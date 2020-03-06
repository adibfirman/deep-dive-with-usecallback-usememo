function generatePrimeNum(num) {
  const arrNum = [];
  const isPrime = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  let i = 0;
  while (arrNum.length !== num) {
    if (isPrime(i)) arrNum.push(i);

    i += 1;
  }

  return arrNum;
}
