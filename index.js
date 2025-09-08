#!/usr/bin/env node
import fs from 'fs';
import { Command } from 'commander'
import path from 'path';

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

const storage = new path_handler();

program
    .name("todo")
    .description("A ToDo CLI made in Commander.js")
    .version("1.0.0")

program
    .command("start")
    .argument("<file>", "File where data will be kept")
    .action((file) => {

        const extension = path.extname(`${file}`).toLowerCase();

        if(extension == ".json"){
            storage.file_path = file;
        }
        else{
            console.error("File is not JSON");
        }

    })



program.parse(process.argv);




