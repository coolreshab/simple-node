function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function printPrime(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i == 0) {
      return;
    }
  }
  console.log(n);
}

async function main() {
  let no = 2;
  while (true) {
    console.log('Containers rule!');
    await sleep(5000);
    printPrime(no++);
  }
}

main();
