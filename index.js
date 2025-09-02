#!/usr/bin/env node

const {Command} = require('commander');

const program = new Command();

program
    .name("ToDo CLI")
    .description("A ToDo CLI made in Commander.js")
    .version("1.0.0")


program.parse(process.argv)


