/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// var MESSAGE = readline();
var MESSAGE = 'C';

// Write an action using print()
// To debug: printErr('Debug messages...');
var binaryMessage = [];
var encodedMessage = '';

MESSAGE.split('').forEach(function(i) {
    i.charCodeAt().toString(2).split('').forEach(function(j) {
        binaryMessage.push(j);
    });
});

for (let i = 0; i < binaryMessage.length; i++) {
    // set first encoded digit
    if (i === 0) {
        if (binaryMessage[i] === '1') {
            encodedMessage += '0 0';
        } else {
            encodedMessage += '00 0';
        }
    } else {

        if (binaryMessage[i] === binaryMessage[i - 1]) {
            encodedMessage += '0';
        } else {
            if (binaryMessage[i] === '1') {
                encodedMessage += ' 0 0';
            } else {
                encodedMessage += ' 00 0';
            }
        }
    }
}

console.log(binaryMessage);
console.log(encodedMessage);
// print(BINARYMESSAGE);
