//addition
let errorBox = document.getElementById('errorContainer');
function addMatrix() {
    console.log(colA.value);

    if (Number(rowA.value) == Number(rowB.value) && Number(colA.value) == Number(colB.value)) {
        document.querySelector('#resultContainer p').firstElementChild.innerHTML = 'A + B';
        resultOut(Number(rowA.value), Number(colB.value));
        for (let i = 0; i < Number(rowA.value); i++) {
            for (let j = 0; j < Number(colA.value); j++) {
                document.getElementById(`matResult${String(i) + String(j)}`).value = Number(document.getElementById(`matA${String(i) + String(j)}`).value) + Number(document.getElementById(`matB${String(i) + String(j)}`).value);
            }
        }
        errorShow('hide', 'Index of Matrix A and Matrix B are same.');
    }
    else {
        errorShow('show', 'Index of Matrix A and Matrix B need to be same.');
    }
}

//substaction
function subMatrix() {

    if (Number(rowA.value) == Number(rowB.value) && Number(colA.value) == Number(colB.value)) {
        document.querySelector('#resultContainer p').firstElementChild.innerHTML = 'A - B';
        resultOut(Number(rowA.value), Number(colB.value));
        for (let i = 0; i < Number(rowA.value); i++) {
            for (let j = 0; j < Number(colA.value); j++) {
                document.getElementById(`matResult${String(i) + String(j)}`).value = Number(document.getElementById(`matA${String(i) + String(j)}`).value) - Number(document.getElementById(`matB${String(i) + String(j)}`).value);
            }
        }
        errorShow('hide', 'Index of Matrix A and Matrix B are same.');
    }
    else {
        errorShow('show', 'Index of Matrix A and Matrix B need to be same.');
    }

}

//multiplication.....
function multMatrix() {

    if (Number(colA.value) == Number(rowB.value)) {
        document.querySelector('#resultContainer p').firstElementChild.innerHTML = 'A X B';
        resultOut(Number(rowA.value), Number(colB.value));

        let tempArr = [];
        for (let i = 0; i < Number(rowA.value); i++) {
            tempArr.push([]);
            for (let j = 0; j < Number(colB.value); j++) {
                tempArr[i][j] = 0;
                for (let k = 0; k < Number(rowB.value); k++) {
                    console.log(tempArr[i][j]);


                    tempArr[i][j] += Number(document.getElementById(`matA${String(i) + String(k)}`).value) * Number(document.getElementById(`matB${String(k) + String(j)}`).value);

                }
                document.getElementById(`matResult${String(i) + String(j)}`).value = tempArr[i][j];
            }
        }

        errorShow('hide', 'Index of Matrix A and Matrix B are same.');
    }
    else {
        errorShow('show', 'Matrix:A column and Matrix:B row amount need to be same ')
    }

}

//transpose Matrix

function transposeMatrix(matrixname) {
   
     
        switch (matrixname) {
            case matTable[0]:
                document.querySelector('#resultContainer p').firstElementChild.innerHTML = 'A<sup>T</sup>';
                resultOut(Number(colA.value), Number(rowA.value));
                for (let i = 0; i < Number(colA.value); i++) {
                    for (let j = 0; j < Number(rowA.value); j++) {
                        document.getElementById(`matResult${String(i) + String(j)}`).value = Number(document.getElementById(`matA${String(j) + String(i)}`).value);
                    }
                }
                break;
            case matTable[1]:
                document.querySelector('#resultContainer p').firstElementChild.innerHTML = 'B<sup>T</sup>';
                resultOut(Number(colB.value), Number(rowB.value));
                for (let i = 0; i < Number(colB.value); i++) {
                    for (let j = 0; j < Number(rowB.value); j++) {
                        document.getElementById(`matResult${String(i) + String(j)}`).value = Number(document.getElementById(`matB${String(j) + String(i)}`).value);
                    }
                }
                break;
        }



}



