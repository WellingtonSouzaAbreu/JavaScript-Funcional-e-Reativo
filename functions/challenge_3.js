const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'dados.txt')

const getFileData = (directory) => {
  return new Promise((resolve, reject) => {
    const data = fs.readFile(directory)
    resolve(data)
  })
}

getFileData(directory).then(data => console.log(data.toString()))

/* const double = (value) => {
  return new Promise((resolve, reject) => {
    resolve(2 * a)
  })
}

double(4)
  .then(res => console.log(res))
  .catch(err => console.log('Deu erro!')) */