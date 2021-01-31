import SingleChannel from "./SingleChannel";

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
describe("single channel method testing", () => {
    const singleChannelTest = new SingleChannel((20 / 60), (25 / 60));
    test("Utility", () => {
        expect(singleChannelTest.getUtility()).toBeWithinRange(0.7, 0.8);
    })
    test("Ls", () => {
        expect(singleChannelTest.getLs()).toBeWithinRange(3, 4);
    })
    test("Lq", () => {
        expect(singleChannelTest.getLq()).toBeWithinRange(3.1, 3.2);
    })
    test("Ws", () => {
        expect(singleChannelTest.getWs()).toBeWithinRange(11, 13);
    })
    test("Wq", () => {
        expect(singleChannelTest.getWq()).toBeWithinRange(9.5, 9.7);
    })
    test("Chance", () => {
        expect(singleChannelTest.getChance(0)).toBeWithinRange(0.1, 0.3);
    })
    test("Chance", () => {
        expect(singleChannelTest.getChance(15)).toBeWithinRange(2, 4);
    })
})
