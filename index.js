const fs = require('fs');
const os = require("os");

function run()
{
    var filename = process.env.PROJ_FILE || process.env.INPUT_PROJ_FILE;    
    if (!fs.existsSync(filename))
        throw new Error('Project file not found');

    console.log(`Project File: ${filename}`);

    try
    {
        var rgx = new RegExp('\\<AssemblyVersion\\>(.*)\\<\\/AssemblyVersion\\>', 'm');
        var ver = rgx.exec(fs.readFileSync(filename, { encoding: 'utf-8' }))[1];
    }
    catch (ex)
    {
        var rgx = new RegExp('\\<Version\\>(.*)\\<\\/Version\\>', 'm');
        var ver = rgx.exec(fs.readFileSync(filename, { encoding: 'utf-8' }))[1];
    }
    
    if (!ver)
        throw new Error('Failed to get Assembly Version');

    console.log(`Assembly Version: ${ver}`)
   
    process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)
}

run();
