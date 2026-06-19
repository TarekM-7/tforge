const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function listCommand(){
    logger.info(
        `
Available templates:

-base
        `
    )
}

module.exports = listCommand;