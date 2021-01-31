import MultiChannel from "./MultiChannel";

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
});
describe("multiple channel method testing", () => {
    const multipleChannel = new MultiChannel(12, 15, 3);
    test("factorial", () => {
        expect(multipleChannel.factorial(5)).toBe(120)
    });
    test("power", () => {
        expect(multipleChannel.power(5, 5)).toBe(3125)
    });
    test("utility", () => {
        expect(multipleChannel.getUtility()).toBeWithinRange(0.7, 0.9)
    });
    test("chance 0", () => {
        expect(multipleChannel.getChance(0)).toBeWithinRange(0.446, 0.448);
    });
    test("chance 2", () => {
        expect(multipleChannel.getChance(2)).toBeWithinRange(0.142, 0.144);
    })
    test("chance > server", () => {
        expect(multipleChannel.getChance(5)).toBeWithinRange(0.00270, 0.00272);
    })
    test("Lq", () => {
        expect(multipleChannel.getLq()).toBeWithinRange(0.0188, 0.0190);
    });
    test("Ls", () => {
        expect(multipleChannel.getLs()).toBeWithinRange(0.81, 0.82);
    })
    test("Wq", () => {
        expect(multipleChannel.getWq()).toBeWithinRange(0.001575, 0.001577);
    });
    test("Ws", () => {
        expect(multipleChannel.getWs()).toBeWithinRange(0.067, 0.069)
    })

});
