#! /usr/bin/env node
const yargs = require('yargs');
const shell = require('shelljs');

const folders = ['.vscode', 'cinema', 'consts', 'environment', 'events', 'functions', 'info', 'map', 'model', 'node_modules', 'objects', 'tsconfig.json', 'effect'];
const files = ['script.ts', 'functions.ts'];
if (['i', 'initialize', 'init', 'install'].includes(yargs.argv._[0])) {
    console.log("Initialising HeckLib, please wait.\nThis might take a while.\n")
    console.time("HeckLib initialised in");
    shell.exec(`rm -rf ${folders.join(" ")}`);

    console.log("Downloading new modules...");
    console.time("Modules downloaded in")
    shell.exec(`git clone --depth=1 https://github.com/Heck-Library/HeckLib/ tmp`);
    console.timeEnd("Modules downloaded in")
    
    console.log("Copying modules...");
    console.time("Modules copied in")
    shell.exec(`cp -r tmp/{${folders.join(",")}} .`);
    shell.exec(`cp -r tmp/{${files.join(",")}} .`);
    console.timeEnd("Modules copied in")

    shell.exec('sleep 1 && rm -rf tmp');
    if (yargs.argv._[1] == 'notemplates') shell.exec(`rm -rf effect`);
} else if (['u', 'update'].includes(yargs.argv._[0])) {
    console.log("Updating HeckLib, please wait. \x1b[31mPlease, don't edit any files while updating.\n\x1b[0mThis might take a while.\n")
    console.time("HeckLib updated in");

    console.log("Uninstalling modules...");
    console.time("Modules uninstalled in");
    shell.exec(`rm -rf ${folders.join(" ")}`);
    console.timeEnd("Modules uninstalled in")

    console.log("Downloading new modules...");
    console.time("Modules downloaded in")
    shell.exec(`git clone --depth=1 https://github.com/Heck-Library/HeckLib/ tmp`);
    console.timeEnd("Modules downloaded in")

    console.log("Copying modules...");
    console.time("Modules copied in")
    shell.exec(`cp -r tmp/{${folders.join(",")}} .`);
    console.timeEnd("Modules copied in")

    shell.exec('sleep 1 && rm -rf tmp');
    if (yargs.argv._[1] == 'notemplates') shell.exec(`rm -rf effect`);
} else {
    console.log(" \x1b[5m\x1b[35m\x1b[1m __  __                 __      \x1b[37m__           __        ")
    console.log(" \x1b[35m/\\ \\/\\ \\               /\\ \\  _ \x1b[37m/\\ \\       __/\\ \\       ")
    console.log(" \x1b[35m\\ \\ \\_\\ \\     __    ___\\ \\ \\/ \\\x1b[37m\\ \\ \\     /\\_\\ \\ \\____  ")
    console.log(" \x1b[35m \\ \\  _  \\  / __ \\ / ___\\ \\   < \x1b[37m\\ \\ \\    \\/\\ \\ \\  __ \\ ")
    console.log(" \x1b[35m  \\ \\ \\ \\ \\/\\  __//\\ \\__/\\ \\ \\\\ \\\x1b[37m\\ \\ \\____\\ \\ \\ \\ \\_\\ \\")
    console.log(" \x1b[35m   \\ \\_\\ \\_\\ \\____\\ \\____\\\\ \\_\\ \\_\x1b[37m\\ \\____/ \\ \\_\\ \\____/")
    console.log(" \x1b[35m    \\/_/\\/_/\\/____/\\/____/ \\/_/\\/_/\x1b[37m\\/___/   \\/_/\\/___/ ")
    console.log(" \x1b[0m ")
    console.log(" ======================================================= \n")
    console.log('Usage: \x1b[1mhecklib <command>\x1b[0m\n')
    console.log('Commands:')
    console.log('\x1b[1minitialize')
    console.log('    \x1b[1m\x1b[36mDescription: \x1b[0m\x1b[37mInitializes a new hecklib project. \x1b[31m\x1b[1mWARNING: THIS WILL OVERWRITE YOUR SCRIPT.TS IF IT EXISTS!')
    console.log('    \x1b[1m\x1b[36mAliases: \x1b[0mi, initialize, init, install\n')
    console.log('\x1b[1mupdate')
    console.log('    \x1b[1m\x1b[36mDescription: \x1b[0m\x1b[37mUpdates the project to the newest version.')
    console.log('    \x1b[1m\x1b[36mAliases: \x1b[0mu, update')
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
sleep(10)
if (['u', 'update'].includes(yargs.argv._[0])) console.timeEnd("HeckLib updated in");
if (['i', 'initialize', 'init', 'install'].includes(yargs.argv._[0])) console.timeEnd("HeckLib initialised in");
