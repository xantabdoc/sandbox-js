/* eslint-disable require-jsdoc */
const futureByPresent = (i, n) => (Math.pow(1 + i, n));
const presentByFuture = (i, n) => (Math.pow(1 + i, -n));
const annualByFuture = (i, n) => (i / (Math.pow(1 + i, n) - 1));
const annualByPresent = (i, n) => (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
const futureByAnnual = (i, n) => ((Math.pow(1 + i, n) - 1) / i);
const presentByAnnual = (i, n) => (Math.pow((1 + i), n) - 1) / (i * Math.pow((1 + i), n));
const annualByGradient = (i, n) => (1 / i - n / (Math.pow(1 + i, n) - 1));
const presentByGradient = (i, n) => (Math.pow(1 + i, n) - i * n - 1) / (Math.pow(i, 2) * Math.pow(1 + i, n));

class CompoundInterest {

    constructor() {
        this.ratio = 0;
    }

    futureByPresent(i, n) {
        this.ratio = futureByPresent(i, n);
        return this;
    }

    presentByFuture(i, n) {
        this.ratio = presentByFuture(i, n);
        return this;
    }

    annualByFuture(i, n) {
        this.ratio = annualByFuture(i, n);
        return this;
    }

    annualByPresent(i, n) {
        this.ratio = annualByPresent(i, n);
        return this;
    }

    futureByAnnual(i, n) {
        this.ratio = futureByAnnual(i, n);
        return this;
    }

    presentByAnnual(i, n) {
        this.ratio = presentByAnnual(i, n);
        return this;
    }

    annualByGradient(i, n) {
        this.ratio = annualByGradient(i, n);
        return this;
    }

    presentByGradient(i, n) {
        this.ratio = presentByGradient(i, n);
        return this;
    }

    getMoney(money) {
        return this.ratio * money;
    }

    getRatio() {
        return this.ratio;
    }
}

export default CompoundInterest;
export {
    futureByPresent,
    presentByFuture,
    annualByFuture,
    annualByPresent,
    futureByAnnual,
    presentByAnnual,
    annualByGradient,
    presentByGradient
}
