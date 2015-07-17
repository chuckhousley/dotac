var clipboard = require("copy-paste"),
    readline = require("readline")
    
var rl = readline.createInterface( process.stdin, process.stdout );
rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(text) {
    text = text.trim();
    switch(text) {
        case '':
            console.log("got nothing!");
            break;
        case 'ayy':
            console.log('lmao');
            clipboard.copy("lmao");
            break;
        default:
            console.log("got " + text + "!");
            clipboard.copy(text);
            break;
    }
    rl.prompt();
}).on('close', function() {
    console.log("\nexiting");
    process.exit(0);
});