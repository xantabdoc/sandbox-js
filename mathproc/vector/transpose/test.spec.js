import transpose from "./index";

describe('Vector Matrix Transpose Testing', () => {
    test('5 x 5 Without Rules Testing', () => {
        const matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ];
        const matrixT = [
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [5, 10, 15, 20, 25]
        ];
        expect(transpose(matrix)).toMatchObject(matrixT)
    });

    test('5 x 5 With Rules Testing', () => {
        const matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ];
        const matrixT = [
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [5, 10, 15, 20, 25]
        ];
        expect(transpose(matrix, true)).toMatchObject(matrixT)
    });

    test('Rules Breaking Testing', () => {
        const m = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8]
        ];
        expect(() => {
            transpose(m, true)
        }).toThrow('all matrix rows length must be at same value');
    });

    test('3 x 5 With Rules Testing', () => {
        const matrix = [
            [1, 2, 3],
            [6, 7, 8],
            [11, 12, 13],
            [16, 17, 18],
            [21, 22, 23]
        ];
        const matrixT = [
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
        ];
        expect(transpose(matrix, true)).toMatchObject(matrixT)
    });

    test('5 x 3 With Rules Testing', () => {
        const matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
        ];
        const matrixT = [
            [1, 6, 11],
            [2, 7, 12],
            [3, 8, 13],
            [4, 9, 14],
            [5, 10, 15]
        ];
        expect(transpose(matrix, true)).toMatchObject(matrixT)
    });

    test('Fragile Test With Rules Testing', () => {
        const bigMatrix = [];
        let number = 0;
        for (let i = 1; i <= 10000; i++) {
            const temp = [];
            for (let j = 1; j <= 10000; j++) {
                temp.push(number++);
            }
            bigMatrix.push(temp);
        }
        // eslint-disable-next-line no-unused-vars
        const matrixT = transpose(bigMatrix);
        expect(true).toBe(true);
    });
})
