function runOrNot(valor, errorChance) {
  return new Promise((resolve, reject) => {
    consif
    if (Math.random() < errorChance) {
      reject('Ocorreu um erro.');
    } else {
      resolve(valor);
    }
  });
}

runOrNot('Testando...', 0.9)
  .then(res => console.log(res), (err) => console.log(`Ops => ${err}`))
  .catch(err => console.error(err));
