//loading animations....
function loading() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('contained').style.cssText += 'animation: view 0.5s ease 1;';
    document.getElementById('contained').style.filter = 'blur(0)';
}

//row column inputs select...
let rowA = document.getElementById('matA-Row');
let colA = document.getElementById('matA-Col');
let rowB = document.getElementById('matB-Row');
let colB = document.getElementById('matB-Col');
let rowR = document.getElementById('result-Row');
let colR = document.getElementById('result-Col');

//matrix making box select...
let matrixA = document.getElementById('matA');
let matrixB = document.getElementById('matB');
let result = document.getElementById('result');

//create table...
matrixA.appendChild(document.createElement('table'));
matrixB.appendChild(document.createElement('table'));
result.appendChild(document.createElement('table'));

let matTable = document.querySelectorAll('.matrixInputSection table');//A,B matrix table 
let resultTable = document.querySelector('#result table');//result table
for (let countTable = 0; countTable < matTable.length; countTable++) {

    createMatrix(matTable[countTable], Number(rowA.value), Number(colA.value));

}

//matrix construction funcion
function createMatrix(matname, row, col) {

    for (let i = 0; i < row; i++) {
        let rowcreate = document.createElement('tr');/*creating row*/
        matname.appendChild(rowcreate);/*output row at html page*/


        for (let j = 0; j < col; j++) {
            let inputCreate = document.createElement('input');/*creating col*/
            rowcreate.appendChild(inputCreate);/*output col at html page*/
            inputCreate.setAttribute('type', 'number');
            inputCreate.setAttribute('value', '');

            //adding placeholder and giving unique id to all cell...
            if (matname == matTable[0]) {
                inputCreate.setAttribute('placeholder', `A${i + 1}${j + 1}`);
                inputCreate.id = `matA${String(i) + String(j)}`;
            }
            else if (matname == matTable[1]) {
                inputCreate.setAttribute('placeholder', `B${i + 1}${j + 1}`);
                inputCreate.id = `matB${String(i) + String(j)}`;
            }
            else if (matname == resultTable) {
                inputCreate.setAttribute('placeholder', `R${i + 1}${j + 1}`);
                inputCreate.id = `matResult${String(i) + String(j)}`
                inputCreate.readOnly = true;
            }


        }
    }

}


//error
function errorShow(error, text) {
    if (error == 'show') {

        errorBox.firstElementChild.style.cssText += " animation: anuma 0.5s ease-in 0s 1 ;"
        errorBox.style.display = "flex";
        document.querySelector('#errorContainer p').innerHTML = text;

    }
    else if (error == 'hide') {
        errorBox.style.display = "none";
    }
}
