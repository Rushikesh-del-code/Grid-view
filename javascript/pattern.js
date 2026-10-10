function printSquare(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

printSquare(5);

function printTriangle(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

printTriangle(5);

function printInvertedTriangle(n) {
    for (let i = n; i > 0; i--) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

printInvertedTriangle(5);

function printPyramid(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }
        console.log(line);
    }
}

printPyramid(5);




function printTriangle(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) { // Iteration stops when j is greater than i
            line += '* ';
        }
        console.log(line);
    }
}

function printdiamond(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }
        console.log(line);
    }
    for (let i = n - 2; i >= 0; i--) {
        let line = '';
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }
        console.log(line);
    }
}
    