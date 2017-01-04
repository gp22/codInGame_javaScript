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

var charBegin = ((T[0].charCodeAt() - 65) * 4);
var charEnd = charBegin + 4;

for (let i = 0; i < H; i++) {
    print(ROW[i].slice(charBegin, charEnd));
}

// Write an action using print()
// To debug: printErr('Debug messages...');
// print('answer');
