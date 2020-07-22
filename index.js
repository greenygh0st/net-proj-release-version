const fs = require('fs');
const os = require("os");

function run()
{
    var filename = process.env.PROJ_FILE || process.env.INPUT_PROJ_FILE;    
    if (!fs.existsSync(filename))
        throw new Error('Project file not found');

    console.log(`Project File: ${filename}`);

    var xml = fs.readFileSync(filename, { encoding: 'utf-8' });
    
    console.log(`XML:${os.EOL}${xml}`);
    
    
    //process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)
}

run();
