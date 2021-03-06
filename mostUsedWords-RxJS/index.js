const fn = require('./functions.js')
const {first, toArray, map} = require('rxjs/operators')
const _ = require('lodash')

const symbols = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

const folderPath = `${__dirname}/data`

fn.readDirectory(folderPath)
    .pipe(
        fn.elementsEndingWith('.srt'),
        fn.readFile(),
        fn.separateFor('\n'),
        fn.removeEmptyRows(),
        fn.removeRowIfInclude('-->'),
        fn.removeRowIfInclude('font'),
        fn.removeRowIfInclude('color'),
        fn.removeRowsWithOnlyNumbers(),
        fn.removeSymbols(symbols),
        fn.separateFor(' '),
        fn.removeRowsWithOnlyNumbers(),
        fn.removeEmptyRows(),
        toArray(),
        fn.groupWords(),
        map(array => _.sortBy(array, el => -el.qtde)),
        fn.writeInFile(folderPath)
    )
    .subscribe(console.log)

/* fn.readDirectory(folderPath)
    .then(fn.elementsEndingWith('.srt'))
    .then(fn.readFiles)
    .then(fn.mergeContents) // Obsoleto em stream de dados
    .then(fn.separateFor('\n'))
    .then(fn.removeEmptyRows)
    .then(fn.removeRowIfInclude('-->'))
    .then(fn.removeRowsWithOnlyNumbers)
    .then(fn.removeSymbols(symbols))
    .then(fn.mergeContents) // Obsoleto em stream de dados
    .then(fn.separateFor(' '))
    .then(fn.removeRowsWithOnlyNumbers)
    .then(fn.removeEmptyRows)
    .then(fn.groupWords)
    .then(fn.sortForNumericAttribute('qtde',' desc'))
    .then(fn.writeInFile(folderPath))
    .then(console.log) */
    