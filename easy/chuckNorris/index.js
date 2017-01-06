// https://www.codingame.com/ide/puzzle/chuck-norris

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();
// var MESSAGE = '%';

// Write an action using print()
// To debug: printErr('Debug messages...');
var binaryMessage = [];
var encodedMessage = '';

MESSAGE.split('').forEach(function(i) {
    var encodedChar = i.charCodeAt().toString(2).split('');
    if (encodedChar.length < 7) {
        zeroes = 7 - encodedChar.length;
        for (let i = 0; i < zeroes; i++) {
            encodedChar.unshift('0');
        }
    }
    encodedChar.forEach(function(j) {
        binaryMessage.push(j);
    });
});

for (let i = 0; i < binaryMessage.length; i++) {
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

// console.log(binaryMessage);
print(encodedMessage);
// print(BINARYMESSAGE);
