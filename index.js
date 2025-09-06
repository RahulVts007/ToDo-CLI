#!/usr/bin/env node

import { Command } from 'commander'

var program = new Command();

function path () {
    var file_path = null;
    function set(file){
        file_path = file;
    }
    function get (){
        return file_path;
    }
    return {set , get};
}

const path = path();



program
    .name("todo")
    .description("A ToDo CLI made in Commander.js")
    .version("1.0.0")

program
    .command("start")
    .argument("<file>", "File where data will be kept")
    .action((file) => {
        path.set(file);
    })


program.parse(process.argv);




