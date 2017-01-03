// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).
//   Game Input
// Your program must read the data from the standard input and write the result on the standard output.
// Input
//
// Line 1: N, the number of temperatures to analyze
//
// Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526
// Output
// Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');
if (!temps) {
    print('0');
} else {
    var returnTemp = temps.split(' ').reduce(function(a, b) {
        if (Math.abs(a) === Math.abs(b)) {
            return (a > b) ? a : b;
        } else {
            return (Math.abs(a) < Math.abs(b)) ? a : b;
        }
    });
    print(returnTemp);
}
