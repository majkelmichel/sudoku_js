"use strict";



const currentSudoku = boards[Math.floor(Math.random() * boards.length)];

currentSudoku.map(pole => {
    let inp = $(`#X${pole['x']}-Y${pole['y']}`)[0].children[0];
    inp.value = pole['value'];
    inp.setAttribute('readonly', true);
})

// let inputList = $('input');
// let sudokuToSolve = [];
//
// for (let i = 0; i < 81; i++) {
//     if (inputList[i].value) {
//         sudokuToSolve.push(inputList[i].value - 1);
//     } else {
//         sudokuToSolve.push(inputList[i].value);
//     }
// }
//
// let sudokuToSolve_9x9 = [];
//
// for (let i = 0; i < 9; i++) {
//     sudokuToSolve_9x9.push(sudokuToSolve.slice(i * 9, i * 9 + 9));
// }

// let solved = sudokuSolver(sudokuToSolve_9x9);


const checkIfSolved = () => {
    let inputList = $('input');
    let sudokuToSolve = [];

    for (let i = 0; i < 81; i++) {
        if (inputList[i].value !== '') {
            sudokuToSolve.push(parseInt(inputList[i].value) - 1);
        } else {
            sudokuToSolve.push(inputList[i].value);
        }
    }

    let sudokuToSolve_9x9 = [];

    for (let i = 0; i < 9; i++) {
        sudokuToSolve_9x9.push(sudokuToSolve.slice(i * 9, i * 9 + 9));
    }
    if (sudokuSolver(sudokuToSolve_9x9)) {
        $('#wyn')[0].innerHTML = "Gratulacje! Rozwiązane";
    } else {
        $('#wyn')[0].innerHTML = "Brak rozwiązania lub złe rozwiązanie";
    }
}