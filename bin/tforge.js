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

const htmlContent = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>${projectName}</h1>
    <script src="app.js"></script>
  </body>
</html>
`;

const cssContent = `
body {
    background-color: green;
}
`;

const jsContent = `
console.log('Project is running')
`;

try{
    const htmlPath = path.join(projectName, "index.html")
    const jsPath = path.join(projectName, "app.js")
    const cssPath = path.join(projectName, "styles.css")
    fs.writeFileSync(htmlPath, htmlContent)
    console.log('index.html: Ready')
    fs.writeFileSync(jsPath, jsContent)
    console.log('app.js: Ready')
    fs.writeFileSync(cssPath, cssContent)
    console.log('styles.css: Ready')
} catch(e) {
    console.log(e)
    process.exit(1)
}



console.log('Done! Your project is ready')
console.log(`  cd ${projectName} and open index.html`)
