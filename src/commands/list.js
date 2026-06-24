const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function getTemplates(){
    const files = fs.readdirSync(folderPath)
    logger.info(files)
}

function listCommand(){
    // getTemplates()
    logger.info(
        `
Available templates:

-base
        `
    )
}

module.exports = listCommand;