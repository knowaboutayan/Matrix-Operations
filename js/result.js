//flag for showing result...
let resultFlag = false;

function resultOut(row, col) {
    if (resultFlag == true) {//deleting result matrix for updating new....

        let child = resultTable.lastElementChild;
        while (child) {
            resultTable.removeChild(child);
            child = resultTable.lastElementChild;
        }
        resultFlag = false;
    }
    if (resultFlag == false) {//updating and creating new result matrix.....
        document.getElementById('resultContainer').style.display = 'flex';
        createMatrix(resultTable, row, col);//matrixCellMaking
        rowR.value = row;
        colR.value = col;
        resultFlag = true;
        errorShow('hide', 'Identity matrix must be a square matrix');
    }
}





// function inputAddRemove(matname) {
//     console.log('yes');
//     switch (matname) {
//         case matTable[0]:
//             if (tempRowA < Number(rowA.value)) {
//                 console.log(tempRowA + "" + rowA, value);

//                 // addNewRow(matTable[0],Number(rowA.value),Number(colA.value));
//             }
//             else if (tempRowA > Number(rowA.value)) {

//                 // removeRow(matTable[0],Number(rowA.value),Number(colA.value));
//             }

//             if (tempColA < Number(colA.value)) {

//                 //addNewRow(matTable[0],Number(rowA.value),Number(colA.value));
//             }
//             else if (tempColA > Number(colA.value)) {

//                 //removeRow(matTable[0],Number(rowA.value),Number(colA.value));
//             }


//         case matTable[1]:

//             if (tempRowA < Number(rowA.value)) {
//                 console.log(tempRowA + "" + rowA, value);
//                 //addNewRow(matTable[1],Number(rowB.value),Number(colB.value));
//             }
//             else if (tempRowB > Number(rowB.value)) {

//                 //removeRow(matTable[1],Number(rowB.value),Number(colB.value));
//             }

//             if (tempColB < Number(colB.value)) {

//                 //addNewRow(matTable[1],Number(rowB.value),Number(colB.value));
//             }
//             else if (tempColB > Number(colB.value)) {

//                 //removeRow(matTable[1],Number(rowB.value),Number(colB.value));
//             }
//     }
// }
