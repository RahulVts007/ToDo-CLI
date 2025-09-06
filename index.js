#!/usr/bin/env node

import { Command } from 'commander'

var program = new Command();

class path_handler {
    file_path = null;

    set file_path(file){
        this._file_path = file;
    }

    get file_path () {
        return this.file_path;
    }
}

const path = new path_handler();

program
    .name("todo")
    .description("A ToDo CLI made in Commander.js")
    .version("1.0.0")

program
    .command("start")
    .argument("<file>", "File where data will be kept")
    .action((file) => {
        path.file_path = file;
    })


program.parse(process.argv);




