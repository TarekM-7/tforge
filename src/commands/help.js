const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function helpCommand(){
    logger.info(
        `
Usage: tforge <project-name>

Description:
  CLI scaffolding tool that generates Express, Mongoose and EJS project.

Options:
  -h, --help                 Display this help message and exit

Commands:
  -tforge <project-name>     Create a new project
  -tforge list               Show available templates
  -tforge --help, -h         Display this help message

Use "tforge --help" for more information about a specific command.

        `
    )
}

module.exports = helpCommand;