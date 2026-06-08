#!/usr/bin/env node
const fs = require('fs');
const path = require("path")

const args = process.argv.slice(2)

const projectName = args[0]
if (!projectName) {
  console.log("Usage: tforge <project-name>")
  process.exit(0)
}
if (fs.existsSync(projectName)) {
  console.log(`Error: the directory ${projectName} already exists`)
  process.exit(1);
}
fs.mkdirSync(projectName)

try{
  fs.mkdirSync(path.join(projectName,'views'))
  fs.mkdirSync(path.join(projectName,'public'))
  fs.mkdirSync(path.join(projectName,'public/js'))
  fs.mkdirSync(path.join(projectName,'public/css'))
  fs.mkdirSync(path.join(projectName,'utils'))
  fs.mkdirSync(path.join(projectName,'seeds'))
  fs.mkdirSync(path.join(projectName,'routes'))
  fs.mkdirSync(path.join(projectName,'models'))
}catch(e){
  console.log(e)
}


const mainContent = fs.readFileSync(path.join("templates","index.js"), 'utf8')



const cssContent = `
body {
    background-color: green;
}
`;

const jsContent = `
console.log('Project is running')
`;

try{
    const mainPath = path.join(projectName, "index.js")
    const jsPath = path.join(projectName, "public", "js", "app.js")
    const cssPath = path.join(projectName, "public", "css", "styles.css")
    fs.writeFileSync(mainPath, mainContent)
    console.log('index.js: Ready')
    fs.writeFileSync(jsPath, jsContent)
    console.log('app.js: Ready')
    fs.writeFileSync(cssPath, cssContent)
    console.log('styles.css: Ready')
} catch(e) {
    console.log(e)
    process.exit(1)
}



console.log('Done! Your project is ready')
console.log(`  cd ${projectName}`)
