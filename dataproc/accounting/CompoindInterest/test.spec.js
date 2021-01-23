import {
    futureByPresent,
    presentByFuture,
    annualByFuture,
    annualByPresent,
    futureByAnnual,
    presentByAnnual,
    annualByGradient,
    presentByGradient,
} from './index';
import CompoundInterest from "./index";

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

describe('Compound Interest Function Testing', () => {
    describe('Dependent Function Testing', () => {
        test('Get Future Ratio By Present Ratio', () => {
            expect(futureByPresent(0.01, 2)).toBeWithinRange(1, 1.1);
        });
        test('Get Present Ratio By Future Ratio', () => {
            expect(presentByFuture(0.01, 2)).toBeWithinRange(0.98, 0.99);
        });
        test('Get Annual Ratio By Future Ratio', () => {
            expect(annualByFuture(0.01, 2)).toBeWithinRange(0.4, 0.5);
        });
        test('Get Annual Ratio By Present Ratio', () => {
            expect(annualByPresent(0.01, 2)).toBeWithinRange(0.5, 0.6);
        });
        test('Get Future Ratio By Annual Ratio', () => {
            expect(futureByAnnual(0.01, 2)).toBeWithinRange(2, 2.1);
        });
        test('Get Present Ratio By Annual Ratio', () => {
            expect(presentByAnnual(0.01, 2)).toBeWithinRange(1.9, 2);
        });
        test('Get Annual Ratio By Gradient Ratio', () => {
            expect(annualByGradient(0.01, 2)).toBeWithinRange(0.4, 0.5);
        });
        test('Get Present Ratio By Gradient Ratio', () => {
            expect(presentByGradient(0.01, 2)).toBeWithinRange(0.98, 0.99);
        });
    })
    describe('Classes Function Testing',()=>{
        test('Classes Function Testing', () => {
            const feature = new CompoundInterest();
            expect(feature.presentByFuture(0.01, 2).getRatio()).toBeWithinRange(0.98, 0.99);
        });
    });

});
