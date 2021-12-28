const { scanFolderFiles, filterLegendFiles, readFiles, separateByLine, removeLinesWithSymbols} = require('./functions.js')

const folderDirectory = `${__dirname}/data`


scanFolderFiles(folderDirectory)
    .then(filesInFolder => filterLegendFiles(filesInFolder))
    .then(legendFiles => readFiles(folderDirectory, legendFiles))
    .then(dirtyLegends => separateByLine(dirtyLegends))
    .then(lines => removeLinesWithSymbols(lines))
    .then(linesWithoutSymbols => console.log(linesWithoutSymbols))