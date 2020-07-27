const fs = require('fs');
const os = require("os");

function run()
{
    var filename = process.env.PROJ_FILE || process.env.INPUT_PROJ_FILE;    
    if (!fs.existsSync(filename))
        throw new Error('Project file not found');

    console.log(`Project File: ${filename}`);

    const txt = fs.readFileSync(filename, { encoding: 'utf-8' });
    
    var rgx = new RegExp('\\<AssemblyVersion\\>(.*)\\<\\/AssemblyVersion\\>', 'm');
    var match = rgx.exec(txt);
    if(!match)
    {
        rgx = new RegExp('\\<Version\\>(.*)\\<\\/Version\\>', 'm');
        match = rgx.exec(txt);
    }
    
    if (!match)
        throw new Error('Failed to get Assembly Version');

    var ver = match[1];
    console.log(`Assembly Version: ${ver}`)
   
    process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)
}

run();
