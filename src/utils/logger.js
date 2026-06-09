const chalk = require('chalk')

const logger = {
    info(message){
        console.log(message)
    },
    success(message) {
        console.log(`[${chalk.green('✓')}] ${message}`)
    } ,
    error(message) {
        console.log(`[${chalk.red('✗')}] ${message}`)
    }
};

module.exports = logger;