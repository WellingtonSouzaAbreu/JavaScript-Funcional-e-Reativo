const fn = require('./functions.js')

const symbols = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

const folderPath = `${__dirname}/data`

fn.readDirectory(folderPath)
    .then(fn.elementsEndingWith('.srt'))
    .then(fn.readFiles)
    .then(fn.mergeContents)
    .then(fn.separateFor('\n'))
    .then(fn.removeEmptyRows)
    .then(fn.removeRowIfInclude('-->'))
    .then(fn.removeRowsWithOnlyNumbers)
    .then(fn.removeSymbols(symbols))
    .then(fn.mergeContents)
    .then(fn.separateFor(' '))
    .then(fn.removeRowsWithOnlyNumbers)
    .then(fn.removeEmptyRows)
    .then(fn.groupWords)
    .then(fn.sortForNumericAttribute('qtde',' desc'))
    .then(fn.writeInFile(folderPath))
    .then(console.log)
    