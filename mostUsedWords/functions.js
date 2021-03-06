const fs = require('fs')

function readDirectory(folderPath) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(folderPath).map(file => {
                return `${folderPath}/${file}`
            })
            resolve(files)
        } catch (err) {
            reject(err)
        }
    })
}

function readFiles(filePaths) {
    return Promise.all(filePaths.map(filePath => readFile(filePath)))
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
            resolve(fileContent.toString())
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

function elementsEndingWith(textualPattern) {
    return filePaths => {
        return filePaths.filter(filePath => filePath.endsWith(textualPattern))
    }
}

function mergeContents(filesContents) {
    return filesContents.join(' ')
}

function separateFor(separator) {
    return function (allContent) {
        return allContent.split(separator)
    }
}

function removeEmptyRows(rows) {
    return rows.filter(row => row.trim())
}

function removeRowIfInclude(textualPattern) {
    return (rows) => {
        return rows.filter(row => !row.includes(textualPattern))
    }
}

function removeRowsWithOnlyNumbers(rows) {
    return rows.filter(row => {
        const num = parseInt(row.trim())
        return num !== num
    })
}

function removeSymbols(symbols) {
    return (rows) => {
        return rows.map(row => {
            let rowWithoutSymbol = row
            symbols.forEach(symbol => {
                rowWithoutSymbol = rowWithoutSymbol.split(symbol).join('')
            })
            return rowWithoutSymbol
        })
    }
}

function groupWords(words) {
    return Object.values(words.reduce((acc, word) => {
        const wordLower = word.toLowerCase()

        const qtde = acc[wordLower] ? acc[wordLower].qtde + 1 : 1
        acc[wordLower] = { element: wordLower, qtde }

        return acc
    }, {}))
}

function sortForNumericAttribute(attribute, order = 'asc') {
    return function (objects) {
        const asc = (obj1, obj2) => obj1[attribute] - obj2[attribute]
        const desc = (obj1, obj2) => obj2[attribute] - obj1[attribute]

        return objects.sort(order == 'asc' ? asc : desc)
    }
}

function writeInFile(folderPath) {
    return function (mostUsedWords) {
        fs.writeFileSync(`${folderPath}/mostUserWords.json`, JSON.stringify(mostUsedWords))
        return mostUsedWords
    }
}

module.exports = {
    readDirectory,
    readFiles,
    elementsEndingWith,
    removeEmptyRows,
    removeRowIfInclude,
    removeRowsWithOnlyNumbers,
    removeSymbols,
    mergeContents,
    separateFor,
    groupWords,
    sortForNumericAttribute,
    writeInFile
}