// https://www.codingame.com/ide/puzzle/horse-racing-duals

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var horses = [];
var diff;

for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    horses.push(pi);
}

for (var i = 0; i < horses.length; i++) {
    if (i === 0) {
        diff = Math.abs(horses[i] - horses[i+1]);
    } else {
        for (var j = 0; j < horses.length; j++) {
           if (i != j) {
                if (Math.abs(horses[i] - horses[j]) < diff) {
                    diff = Math.abs(horses[i] - horses[j]);
                }
            }
        }
    }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(diff);
