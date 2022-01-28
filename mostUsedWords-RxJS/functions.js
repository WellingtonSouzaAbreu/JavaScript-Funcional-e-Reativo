const fs = require('fs')
const { Observable } = require('rxjs')

/* function readDirectory(folderPath) {
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
} */

function readDirectory(folderPath) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(folderPath).forEach(file => {
                subscriber.next(`${folderPath}/${file}`)
            })
            subscriber.complete()
        } catch (err) {
            subscriber.error(err)
        }
    })
}

/* function readFiles(filePaths) { // Obsoleto, utilizou-se um stream de dados
    return Promise.all(filePaths.map(filePath => readFile(filePath)))
} */

/* function readFile(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
            resolve(fileContent.toString())
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
} */

function readFile(filePath) {
    return createPipeableOperator(subscriber => ({
        next(filePath) {
            try {
                const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
                subscriber.next(fileContent.toString())
            } catch (err) {
                subscriber.error(err)
            }
        }
    }))
}


/* function elementsEndingWith(textualPattern) {
    return filePaths => {
        return filePaths.filter(filePath => filePath.endsWith(textualPattern))
    }
} */

function elementsEndingWith(textualPattern) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.endsWith(textualPattern)) {
                subscriber.next(text)
            }
        }
    }))
}

function mergeContents(filesContents) {
    return filesContents.join(' ')
}

/* function separateFor(separator) {
    return function (allContent) {
        return allContent.split(separator)
    }
} */

function separateFor(separator) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            text.split(separator).forEach(fragment => {
                subscriber.next(fragment)
            })
        }
    }))
}

/* function removeEmptyRows(rows) {
    return rows.filter(row => row.trim())
} */

function removeEmptyRows() {
    return createPipeableOperator(subscriber => ({
        next(row) {
            row.trim() && subscriber.next(row)
        }
    }))
}

/* function removeRowIfInclude(textualPattern) {
    return (rows) => {
        return rows.filter(row => !row.includes(textualPattern))
    }
} */

function removeRowIfInclude(textualPattern) {
    return createPipeableOperator(subscriber => ({
        next(row) {
            !row.includes(textualPattern) && subscriber.next(row)
        }
    }))
}

/* function removeRowsWithOnlyNumbers(rows) {
    return rows.filter(row => {
        const num = parseInt(row.trim())
        return num !== num
    })
} */

function removeRowsWithOnlyNumbers() {
    return createPipeableOperator(subscriber => ({
        next(row) {
            const num = parseInt(row.trim())
            if (num !== num) {
                subscriber.next(row)
            }
        }
    }))
}

/* function removeSymbols(symbols) {
    return (rows) => {
        return rows.map(row => {
            let rowWithoutSymbol = row
            symbols.forEach(symbol => {
                rowWithoutSymbol = rowWithoutSymbol.split(symbol).join('')
            })
            return rowWithoutSymbol
        })
    }
} */

function removeSymbols(symbols) {
    return createPipeableOperator(subscriber => ({
        next(row) {
            let rowWithoutSymbol = row
            symbols.forEach(symbol => {
                rowWithoutSymbol = rowWithoutSymbol.split(symbol).join('')
            })
            subscriber.next(rowWithoutSymbol)
        }
    }))
}

/* function groupWords(words) {
    return Object.values(words.reduce((acc, word) => {
        const wordLower = word.toLowerCase()

        const qtde = acc[wordLower] ? acc[wordLower].qtde + 1 : 1
        acc[wordLower] = { element: wordLower, qtde }

        return acc
    }, {}))
} */

function groupWords(words) {
    return createPipeableOperator(subscriber => ({
        next(words) {
            const groupedWords = Object.values(words.reduce((acc, word) => {
                const wordLower = word.toLowerCase()

                const qtde = acc[wordLower] ? acc[wordLower].qtde + 1 : 1
                acc[wordLower] = { element: wordLower, qtde }

                return acc
            }, {}))

            subscriber.next(groupedWords)
        }
    }))
}

/* function sortForNumericAttribute(attribute, order = 'asc') {
    return function (objects) {
        const asc = (obj1, obj2) => obj1[attribute] - obj2[attribute]
        const desc = (obj1, obj2) => obj2[attribute] - obj1[attribute]

        return objects.sort(order == 'asc' ? asc : desc)
    }
} */

function writeInFile(folderPath) {
    return function (mostUsedWords) {
        fs.writeFileSync(`${folderPath}/mostUserWords.json`, JSON.stringify(mostUsedWords))
        return mostUsedWords
    }
}

function createPipeableOperator(operatorFunction) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFunction(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (err => subscriber.error(err)),
                complete: sub.complete || (_ => subscriber.complete())
            })
        })
    }
}

module.exports = {
    readDirectory,
    // readFiles,
    readFile,
    elementsEndingWith,
    removeEmptyRows,
    removeRowIfInclude,
    removeRowsWithOnlyNumbers,
    removeSymbols,
    mergeContents,
    separateFor,
    groupWords,
    // sortForNumericAttribute,
    createPipeableOperator,
    writeInFile,

}