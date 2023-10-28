//swapping.... result <==> matrix
function swapResult(matname) {
    switch (matname) {//result <==> matrixA
        case matTable[0]:
            for (let i = 0; i < Number(rowA.value); i++) {//i=j
                for (let j = 0; j < Number(colA.value); j++) {
                    document.getElementById(`matA${String(i) + String(j)}`).value = Number(document.getElementById(`matResult${String(i) + String(j)}`).value);
                }
            }
            break;
        case matTable[1]://result <==> matrixB
            for (let i = 0; i < Number(rowB.value); i++) {
                for (let j = 0; j < Number(colB.value); j++) {
                    document.getElementById(`matB${String(i) + String(j)}`).value = Number(document.getElementById(`matResult${String(i) + String(j)}`).value);
                }
            }
            break;
    }

}

//identity matrix....
function identityMatrix(matname, row, col) {
    if (row != col) {
        errorShow('show', 'Identity matrix must be a square matrix');
        return 0;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == j) {
                switch (matname) {
                    case matTable[0]:

                        document.getElementById(`matA${String(i) + String(j)}`).value = 1;
                        break;
                    case matTable[1]:
                        document.getElementById(`matB${String(i) + String(j)}`).value = 1;
                        break;
                }
            }

            else {
                switch (matname) {
                    case matTable[0]:

                        document.getElementById(`matA${String(i) + String(j)}`).value = 0;
                        break;
                    case matTable[1]:
                        document.getElementById(`matB${String(i) + String(j)}`).value = 0;
                        break;
                }
            }

        }
    }
}




//random entries
function randomMatrix(matname) {
    let randomNum;
    if (matname == matTable[0]) {

        for (let i = 0; i < Number(rowA.value); i++) {
            for (let j = 0; j < Number(colA.value); j++) {
                randomNum = Math.floor(Math.random() * 100);//random number create

                document.getElementById(`matA${String(i) + String(j)}`).value = randomNum;

            }
        }
    }
    else if (matname == matTable[1]) {

        for (let i = 0; i < Number(rowB.value); i++) {
            for (let j = 0; j < Number(colB.value); j++) {
                randomNum = Math.floor(Math.random() * 100);

                document.getElementById(`matB${String(i) + String(j)}`).value = randomNum;
            }
        }
    }
}


//reset all
function resetMatrix(matname) {
    let x = confirm('Are you sure to reset all the entries of this matrix');
    if (x == true) {
        if (matname == matTable[0]) {

            for (let i = 0; i < Number(rowA.value); i++) {
                for (let j = 0; j < Number(colA.value); j++) {

                    document.getElementById(`matA${String(i) + String(j)}`).value = '';

                }
            }
        }
        else if (matname == matTable[1]) {
            for (let i = 0; i < Number(rowB.value); i++) {
                for (let j = 0; j < Number(colB.value); j++) {
                    document.getElementById(`matB${String(i) + String(j)}`).value = '';
                }
            }
        }
    }

    else {
        return 0;
    }
}
