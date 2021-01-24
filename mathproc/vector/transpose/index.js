const isDataAccepted = (matrix) => {
    const columnLength = matrix.length;
    const indexRowLength = matrix[0].length;
    for (let i = 0; i < columnLength; i++) {
        // checking rows every steps
        if (matrix[i].length !== indexRowLength) {
            throw new Error('all matrix rows length must be at same value');
        }

    }
}
const transpose = (matrix, useRules = false) => {
    if (useRules) {
        isDataAccepted(matrix);
    }
    if (matrix.length === matrix[0].length) {
        return matrix.map((value, column) => matrix.map(row => row[column]));
    }
    const MatrixT = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        MatrixT.push(temp);
    }
    return MatrixT;
};

export default transpose;
