var clipboard = require("copy-paste"),
    readline = require("readline")
    
var copy = clipboard.copy;

var re = /^\/([A-Za-z][A-Za-z]*[A-Za-z]*[A-Za-z]*)\s?(.*)/

var rl = readline.createInterface( process.stdin, process.stdout );
rl.setPrompt('> ');
rl.prompt();

var char = String.fromCharCode;

var RED = char(0x12),
    YELLOW = char(0x14),
    ORANGE = char(0x1b),
    GREEN1 = char(0x08),
    GREEN2 = char(0x10),
    GREEN3 = char(0x11),
    GREEN4 = char(0x15),
    GREEN5 = char(0x18),
    GREEN6 = char(0x0c),
    BLUE = char(0x19),
    INDIGO = char(0x09),
    VIOLET = char(0x19),
    MAGENTA = char(0x0e),
    PURPLE = char(0x1a),
    SALMON = char(0x1c),
    GOLDENROD = char(0x1d),
    GRAY = char(0x17),
    BROWN = char(0x1b);
    

rl.on('line', function(input) {
    var cmd = null, message = null;
    input = input.trim();
    var match = re.exec(input);
    if (match) { 
        cmd = match[1];
        message = match[2];
    } else {
        message = input;
    }
    switch(cmd) {
        case 'r':
            console.log("red: " + message);
            copy(RED + message);
            break;
        case 'o':
            console.log("orange: " + message);
            copy(ORANGE + message);
            break;
        case 'y':
            console.log("yellow: " + message);
            copy(YELLOW + message);
            break;
        case 'g':
            console.log("green: " + message);
            copy(GREEN1 + message);
            break;
        case 'b':
            console.log("blue: " + message);
            copy(BLUE + message);
            break;
        case 'i':
            console.log("indigo: " + message);
            copy(INDIGO + message);
            break;
        case 'v':
            console.log("violet: " + message);
            copy(VIOLET + message);
            break;
        case 'gold':
            console.log("gold: " + message);
            copy(GOLDENROD + message);
            break;
        case 'sal':
            console.log("salmon: " + message);
            copy(SALMON + message);
            break;
        case 'gray':
            console.log("gray: " + message);
            copy(GRAY + message);
            break;
        case 'brn':
            console.log("brown: " + message);
            copy(BROWN + message);
            break;
        case 'weed':
            if (message == '') {
                console.log('dank meme loaded');
                copy(GREEN1 + "420 BlAzE iT " + 
                    BROWN + "===" + 
                    ORANGE + "o " + 
                    GRAY + "~~~"); 
            } else {
                console.log('kush: ' + message);
                var greens = [GREEN1, GREEN2, GREEN3, GREEN4, GREEN5, GREEN6];
                var r = 0, j = 0, retmessage = '';
                for (var i = 0; i < message.length; i++) {
                    retmessage += greens[r++] + message[i];
                    if (r > 5) { r = 0; }
                }
            }
            break;
        case 'h':
            console.log("Available commands are:\n/r\n/o\n/y\n/g\n/b\n/i\n/v"
                    + "\n/gold\n/sal\n/gray\n/brn\n/weed"
                    + "\nStrings without command will be rainbowified");
            break;
        default:
            if (cmd) {
                console.log("undefined command");
                break;
            }
            console.log("rainbow: " + message);
            var rainbow = [RED, ORANGE, YELLOW, GREEN1, BLUE, INDIGO, VIOLET];
            var r = 0, j = 0, retmessage = '';
            for (var i = 0; i < message.length; i++) {
                retmessage += rainbow[r++] + message[i];
                if (r > 6) { r = 0; }
            }
            copy(retmessage);
            break;
    }
    rl.prompt();
}).on('close', function() {
    console.log("\nexiting");
    process.exit(0);
});

