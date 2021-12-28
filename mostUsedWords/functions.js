const fs = require('fs')

const scanFolderFiles = async (folderDirectory) => {

    const filesInFolder = await fs.readdirSync(folderDirectory, (err, files) => {
        if (err) console.log(err)
        return files
    })

    return filesInFolder
}

const filterLegendFiles = async (files) => {
    let legendFiles = await files.filter(fileName => !!fileName.match(/legendas_(.*)\.srt/g))
    return legendFiles
}

const readFiles = async (folderDirectory, files) => {
    let dirtyLegends = await files.map(file => {
        let textFile = fs.readFileSync(`${folderDirectory}/${file}`).toString()
        return textFile
    })
    return dirtyLegends
}

const separateByLine = ([dirtyLegends]) => {
    return dirtyLegends.split('\n')
}

const removeLinesWithSymbols = (lines) => {
    const symbols = ['-->', ',']

    return lines.filter(line => {
        return symbols.forEach(symbol => {
            if(line.indexOf(symbol) < 0){
                return true
            }else{
                return false
            }
        })
    })
}


module.exports = { scanFolderFiles, filterLegendFiles, readFiles, separateByLine, removeLinesWithSymbols }