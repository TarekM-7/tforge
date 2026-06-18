const fs = require('fs');
const path = require("path")
const logger = require('../utils/logger')
const { execSync } = require('child_process')
const ora = require('ora');


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

    fs.mkdirSync(path.join(projectName,'views'))
    logger.success(`Folder: Views`);

    function copyTemplate(templatePath, targetPath) {
    const entries = fs.readdirSync(templatePath, { withFileTypes: true });

    for (let entry of entries) {
        const src = path.join(templatePath, entry.name);
        const dest = path.join(targetPath, entry.name);

        if (entry.isDirectory()) {
            fs.mkdirSync(dest, { recursive: true });
            copyTemplate(src, dest);
        } else {
            let content = fs.readFileSync(src, 'utf8');
            content = content.replaceAll('{{ projectName }}', projectName);
            fs.writeFileSync(dest, content);
        }
    }
}

    copyTemplate(
    path.join(__dirname, '..', 'templates', 'base'),
    projectName
)
    const spinner = ora({
    text: 'Installing dependencies...',
    spinner: 'dots2'
    }).start();
    execSync('npm install', { cwd: projectName, stdio: 'ignore' })
    spinner.succeed('Dependencies installed')

    spinner.start('Initialising git...');
    execSync('git init', { cwd: projectName, stdio: 'ignore' })
    spinner.succeed('Git initialized')


    logger.info('Project Created');
}

module.exports = createProject;