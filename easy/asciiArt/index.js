// https://www.codingame.com/training/easy/ascii-art

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();
var ROW = [];
for (let i = 0; i < H; i++) {
    ROW[i] = readline();
}

var array = T.toUpperCase().split('');
var stringToPrint = array.map(function(i) {
    if (i.charCodeAt() < 65 || i.charCodeAt() > 90) {
        return '?';
    } else {
        return i;
    }
});

for (let i = 0; i < H; i++) {
    var line = '';
    // create a string for the ith line of text, assign to line
    for (let j = 0; j < stringToPrint.length; j++) {
        if (stringToPrint[j] === '?') {
            var charBegin = (26 * L);
            var charEnd = charBegin + L;
            line += (ROW[i].slice(charBegin, charEnd));
        } else {
            var charBegin = ((stringToPrint[j].charCodeAt() - 65) * L);
            var charEnd = charBegin + L;
            line += (ROW[i].slice(charBegin, charEnd));
        }
    }
    print(line);
}

// Write an action using print()
// To debug: printErr('Debug messages...');
// print('answer');
