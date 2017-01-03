// Your program must allow Thor to reach the light of power.
//   Rules
// Thor moves on a map which is 40 wide by 18 high. Note that the coordinates (X and Y) start at the top left! This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".
//
// Once the program starts you are given:
//
//     the variable lightX: the X position of the light of power that Thor must reach.
//     the variable lightY: the Y position of the light of power that Thor must reach.
//     the variable initialTX: the starting X position of Thor.
//     the variable initialTY: the starting Y position of Thor.
//
// At the end of the game turn, you must output the direction in which you want Thor to go among:
// N (North)
// NE (North-East)
// E (East)
// SE (South-East)
// S (South)
// SW (South-West)
// W (West)
// NW (North-West)
// Each movement makes Thor move by 1 cell in the chosen direction.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var direction = '';
//        printErr('Thors position: ', initialTX, initialTY, 'Light position: ', lightX, lightY);

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if (initialTY > lightY && initialTY > 0) { // thors y is greater than target
        direction += 'N';
        initialTY--;
    } else if (initialTY < lightY && initialTY < 18) { //thors y is less than target
        direction += 'S';
        initialTY++;
    }

    if (initialTX > lightX && initialTX > 0) { // thors x is greater than target
        direction += 'W';
        initialTX--;
    } else if (initialTX < lightX && initialTY < 18) { //thors x is less than target
        direction += 'E';
        initialTX++;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}
