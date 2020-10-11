const elems = $('td');
const regex = /X\d-Y\d/
let newArr = [];

for (let i = 0; i < elems.length; i++) {
    let str = elems[i].id;
    if (regex.test(str)) {
        newArr.push(elems[i]);
    }
}

for (let x in newArr) {
    newArr[x].addEventListener('mouseover', () => {
        for (let j = 0; j < 9; j++) {
            $(`#X${j}-Y${newArr[x].id[4]}`).css('background-color', 'red');
            $(`#X${newArr[x].id[1]}-Y${j}`).css('background-color', 'red');
        }
        [].slice.call([].slice.call($(`#X${newArr[x].id[1]}-Y${newArr[x].id[4]}`)[0].parentElement.parentElement.children)).map(a => {
            a.style.backgroundColor = 'red';
        });
    });
    newArr[x].addEventListener('mouseout', () => {
        for (let j = 0; j < 9; j++) {
            $(`#X${newArr[x].id[1]}-Y${j}`).css('background-color', 'transparent');
            $(`#X${j}-Y${newArr[x].id[4]}`).css('background-color', 'transparent');
        }
        [].slice.call([].slice.call($(`#X${newArr[x].id[1]}-Y${newArr[x].id[4]}`)[0].parentElement.parentElement.children)).map(a => {
            a.style.backgroundColor = 'transparent';
        });
    });
}