"use strict";

// ID format: "Xn-Yn"

const to_render_in = document.querySelectorAll('.nine');

const renderWithId = (y, x) => {
    const table_3_3 = `        <table>
            <tr>
                <td>
                    <table class='inner-table'>
                        <tr>
                            <td id="X${x * 3}-Y${y * 3}" class="x${x * 3} y${y*3}"><input type="number"></td>
                            <td id="X${x * 3 + 1}-Y${y * 3}" class="x${x * 3 + 1} y${y*3}"><input type="number"></td>
                            <td id="X${x * 3 + 2}-Y${y * 3}" class="x${x * 3 + 2} y${y*3}"><input type="number"></td>
                        </tr>
                        <tr>
                            <td id="X${x * 3}-Y${y * 3 + 1}" class="x${x * 3} y${y * 3 + 1}"><input type="number"></td>
                            <td id="X${x * 3 + 1}-Y${y * 3 + 1}" class="x${x * 3 + 1} y${y * 3 + 1}"><input type="number"></td>
                            <td id="X${x * 3 + 2}-Y${y * 3 + 1}" class="x${x * 3 + 2} y${y * 3 + 1}"><input type="number"></td>
                        </tr>
                        <tr>
                            <td id="X${x * 3}-Y${y * 3 + 2}" class="x${x * 3} y${y * 3 + 2}"><input type="number"></td>
                            <td id="X${x * 3 + 1}-Y${y * 3 + 2}" class="x${x * 3 + 1} y${y * 3 + 2}"><input type="number"></td>
                            <td id="X${x * 3 + 2}-Y${y * 3 + 2}" class="x${x * 3 + 2} y${y * 3 + 2}"><input type="number"></td>
                        </tr>
                    </table>`
    return table_3_3;
}

let arr = [[],[],[]];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr[i][j] = to_render_in[i * 3 + j];
        arr[i][j].innerHTML = renderWithId(i, j);
    }
}