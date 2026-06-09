#!/usr/bin/env node

const logger = require('../src/utils/logger')
const createProject = require('../src/commands/create')

const args = process.argv.slice(2)
const projectName = args[0]

try{
  createProject(projectName)
} catch (e){
  logger.error(e)
  process.exit(1);
}