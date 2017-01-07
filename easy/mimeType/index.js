/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var fileType = {};

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    fileType[EXT] = MT;
}

for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    FNAME = FNAME.toLowerCase();
    if (FNAME.lastIndexOf('.') === -1) {
        print('UNKNOWN')
    } else {
        var extension = FNAME.slice(FNAME.lastIndexOf('.') + 1);
        (fileType.hasOwnProperty(extension)) ? print(fileType[extension]) : print('UNKNOWN');
    }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
// print('UNKNOWN');
