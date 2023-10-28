//adding additional row.....
function addNewRow(matname, row, col) {
    let i = row;
    let rowcreate = document.createElement('tr');/*creating row*/
    matname.appendChild(rowcreate);/*output row at html page*/

    for (let j = 0; j < col; j++) {
        let inputCreate = document.createElement('input');/*creating col*/
        rowcreate.appendChild(inputCreate);/*output col at html page*/
        inputCreate.setAttribute('type', 'number');
        inputCreate.setAttribute('value', '');

        //add id with inputs
        if (matname == matTable[0]) {
            inputCreate.setAttribute('placeholder', `A${i + 1}${j + 1}`);
            inputCreate.id = `matA${String(i) + String(j)}`;
        }
        else if (matname == matTable[1]) {
            inputCreate.setAttribute('placeholder', `B${i + 1}${j + 1}`);
            inputCreate.id = `matB${String(i) + String(j)}`;
        }

    }


    //row values increment
    if (matname == matTable[0]) {
        rowA.value++;
    }
    else if (matname == matTable[1]) {
        rowB.value++;

    }

}

//adding additionl column....
function addNewCol(matname, row, col) {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j == col - 1) {
                let inputCreate = document.createElement('input');/*creating col*/
                //adding process.....
                if (matname == matTable[0]) {//add at matrixA 
                    document.getElementById(`matA${String(i) + String(j)}`).insertAdjacentElement('afterend', inputCreate);
                    inputCreate.setAttribute('placeholder', `A${i + 1}${j + 1 + 1}`);
                    inputCreate.id = `matA${String(i) + String(j + 1)}`;

                }
                else if (matname == matTable[1]) {//adding at matrix B
                    document.getElementById(`matB${String(i) + String(j)}`).insertAdjacentElement('afterend', inputCreate);
                    inputCreate.setAttribute('placeholder', `B${i + 1}${j + 1 + 1}`);
                    inputCreate.id = `matB${String(i) + String(j + 1)}`;

                }

                inputCreate.setAttribute('type', 'number');
                inputCreate.setAttribute('value', "");
            }
        }
    }
    //updating values.....
    if (matname == matTable[0]) {
        colA.value++;
    }
    else if (matname == matTable[1]) {
        colB.value++;

    }

}

//remove row;
function removeRow(matname) {
    if (matname == matTable[0] && Number(rowA.value) > 1) {
        matname.lastElementChild.remove();
        rowA.value--;

    }
    else if (matname == matTable[1] && Number(rowB.value) > 1) {
        matname.lastElementChild.remove();
        rowB.value--;
    }



}

//column remove......
function removeCol(matname, row, col) {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j == col - 1) {

                //adding process.....
                if (matname == matTable[0] && Number(colA.value) > 1) {
                    document.getElementById(`matA${String(i) + String(j)}`).remove();

                }
                else if (matname == matTable[1] && Number(colB.value) > 1) {
                    document.getElementById(`matB${String(i) + String(j)}`).remove();

                }


            }
        }
    }
    if (matname == matTable[0] && Number(colA.value) > 1) {
        colA.value--;
    }
    else if (matname == matTable[1] && Number(colB.value) > 1) {
        colB.value--;

    }

}