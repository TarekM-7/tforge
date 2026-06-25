const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function getTemplates(){
    const folders = fs.readdirSync(path.join(__dirname, '..', 'templates'));
    return folders;
}

function listCommand(){
    const templates = getTemplates()
    logger.info(
        `
Available templates:
        `
    )
    for(const template of templates){
        logger.info(`-${template}`)
    }
}

module.exports = listCommand;