const logger = {
    info(message){
        console.log(message)
    },
    success(message) {
        console.log(`[✓] ${message}`)
    } ,
    error(message) {
        console.log(`[✗] ${message}`)
    }
};

module.exports = logger;