const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')

function createProject(projectName){
    if (!projectName) {
        console.log("Usage: tforge <project-name>");
        process.exit(0);
    }
    if (fs.existsSync(projectName)) {
        console.log(`Error: the directory ${projectName} already exists`);
        process.exit(1);
    }
    fs.mkdirSync(projectName)
    logger.success(`Folder: ${projectName}`);

    function createFile(fileName) {
        const content = fs.readFileSync(path.join(__dirname, '..', 'templates', fileName), 'utf8');
        fs.writeFileSync(path.join(projectName, fileName), content);
    }
    createFile('index.js')
    logger.success('Main index.html file')
}

// try{
//   fs.mkdirSync(path.join(projectName,'views'))
//   fs.mkdirSync(path.join(projectName,'public'))
//   fs.mkdirSync(path.join(projectName,'public/js'))
//   fs.mkdirSync(path.join(projectName,'public/css'))
//   fs.mkdirSync(path.join(projectName,'utils'))
//   fs.mkdirSync(path.join(projectName,'seeds'))
//   fs.mkdirSync(path.join(projectName,'routes'))
//   fs.mkdirSync(path.join(projectName,'models'))
// }catch(e){
//   console.log(e)
// }


// const mainContent = fs.readFileSync(path.join(__dirname, '..', 'templates', 'index.js'), 'utf8')
// const cssContent = fs.readFileSync(path.join(__dirname, '..', 'templates', 'styles.css'), 'utf8')
// const jsContent = fs.readFileSync(path.join(__dirname, '..', 'templates', 'app.js'), 'utf8')

// try{
//     const mainPath = path.join(projectName, "index.js")
//     const jsPath = path.join(projectName, "public", "js", "app.js")
//     const cssPath = path.join(projectName, "public", "css", "styles.css")
//     fs.writeFileSync(mainPath, mainContent)
//     logger.succes('index.js')
//     fs.writeFileSync(jsPath, jsContent)
//     logger.succes('app.js')
//     fs.writeFileSync(cssPath, cssContent)
//     logger.succes('styles.css')
// } catch(e) {
//     console.log(e)
//     process.exit(1)
// }



// console.log('Done! Your project is ready')
// console.log(`  cd ${projectName}`)

module.exports = createProject;
