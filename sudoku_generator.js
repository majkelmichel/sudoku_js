"use strict";

const currentSudoku = boards[Math.floor(Math.random() * boards.length)];

currentSudoku.map(pole => {
    let inp = $(`#X${pole['x']}-Y${pole['y']}`)[0].children[0];
    inp.value = pole['value'];
    inp.setAttribute('readonly', true);
})

const checkIfSolved = () => {
    let inputList = $('input');
    let sudokuToSolve = [];

    for (let i = 0; i < 81; i++) {
        if (inputList[i].value !== '') {
            sudokuToSolve.push(parseInt(inputList[i].value));
        } else {
            sudokuToSolve.push(inputList[i].value);
        }
    }

    let sudokuToSolve_9x9 = [];

    for (let i = 0; i < 9; i++) {
        sudokuToSolve_9x9.push(sudokuToSolve.slice(i * 9, i * 9 + 9));
    }

    let toSolve = [[],[],[],[],[],[],[],[],[]];

    for (let i = 0; i < 9; i++) {
        let y1 = sudokuToSolve_9x9[i].slice(0,3);
        let y2 = sudokuToSolve_9x9[i].slice(3,6);
        let y3 = sudokuToSolve_9x9[i].slice(6,9);
        toSolve[Math.floor(i / 3) * 3] = [...(toSolve[Math.floor(i / 3) * 3]), ...y1];
        toSolve[Math.floor(i / 3) * 3 + 1] = [...(toSolve[Math.floor(i / 3) * 3 + 1]), ...y2];
        toSolve[Math.floor(i / 3) * 3 + 2] = [...(toSolve[Math.floor(i / 3) * 3 + 2]), ...y3];
    }

    let copyToSolve = [[],[],[],[],[],[],[],[],[]];
    for (let i = 0; i < 9; i++) {
        copyToSolve[i].push(...toSolve[i]);
    }
    sudokuSolver(copyToSolve);
    // console.log(toSolve, copyToSolve);
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (toSolve[i][j] == copyToSolve[i][j]) {
                sum++;
            }
        }
    }

    // console.log(sum);

    if (sum === 81) {
        alert("Gratulacje! Rozwiązane")
    } else {
        alert("Brak rozwiązania lub złe rozwiązanie")
    }
}