var fs = require('fs');

var text = fs.readFileSync('./file.txt', 'utf8');


function removeDuplicates(text){
    var lines = text.split('\n');
    var seen = new Set();
    for(let i=0; i< lines.length; i++){
        if(!seen.has(lines[i])){
            seen.add(lines[i]);
        }
    }
    return seen;
}
removeDuplicates(text);