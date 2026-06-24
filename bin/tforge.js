#!/usr/bin/env node

const logger = require('../src/utils/logger')
const createProject = require('../src/commands/create')
const helpCommand = require('../src/commands/help')
const listCommand = require('../src/commands/list')

const args = process.argv.slice(2)
const command = args[0]

try{
  if(command === '--help' || command === '-h'){
    helpCommand();
  }else if(command === 'list'){
    listCommand();
  }else{
    createProject(command);
  }
} catch (e){
  logger.error(e)
  process.exit(1);
}