const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function helpCommand(){
    logger.info(
        `
        tforge — project scaffolding by Tarek Mariscal

        Usage:
        tforge <project-name>

        Example:
        tforge my-app
        `
    )
}

module.exports = helpCommand;