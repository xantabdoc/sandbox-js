/**
 * Multi Channel Model (M/M/C):(GD/~/~)
 * @type {MultiChannel}
 */
class MultiChannel {
    /**
     * constructing class
     * @param {number} arrivalRate
     * @param {number} serviceRate
     * @param {number} totalServer
     */
    constructor(arrivalRate, serviceRate, totalServer) {
        this.ar = arrivalRate;
        this.sr = serviceRate;
        this.ts = totalServer;
    }

    /**
     * local function for factoring numbers (n!)
     * @param {number} n
     * @return {number}
     */
    factorial(n) {
        if (n <= 1) return 1;
        let d = 1;
        for (let i = n; i >= 1; i--) {
            d = d * i;
        }
        return d;
    }

    /**
     * local function for powering number (N^n)
     * @param {number} number
     * @param {number} power
     * @return {number}
     */
    power(number, power) {
        let xn = number;
        if (power === 0) return 1;
        for (let i = 1; i < power; i++) {
            xn = xn * number;
        }
        return xn;
    }

    /**
     * server utility of customer arrival and service
     * @return {number}
     */
    getUtility() {
        return this.ar / this.sr;
    }

    /**
     * chance number of customer in the system
     * @param {number} n - number of customer in system
     * @return {number}
     */
    getChance(n) {
        const utility = this.getUtility();
        const server = this.ts;
        if (n === 0) {
            let p1 = 0;
            for (let i = 0; i < server; i++) {
                const pn = this.power(utility, i);
                const nf = this.factorial(i);
                p1 = p1 + (pn / nf);
            }
            const p2 = (this.power(utility, server) / (this.factorial(server) * (1 - (utility / server))));
            return (1 / (p1 + p2));
        }
        if (0 <= n && n < server) {
            return ((this.power(utility, n) / (this.factorial(n)) * this.getChance(0)));
        }
        return ((this.power(utility, n) / (this.factorial(server) * (this.power(server, (n - server))))) * this.getChance(0));
    }

    /**
     * average number of queue
     * @return {number}
     */
    getLq() {
        const utility = this.getUtility();
        const server = this.ts;
        return ((this.power(utility, server) / this.factorial(server)) * ((utility / server) / (this.power((1 - (utility / server)), 2))) * this.getChance(0));
    }

    /**
     * average number of customer waiting in the system
     * @return {number}
     */
    getLs() {
        return this.getLq() + this.getUtility();
    }

    /**
     * average queueing time before service
     * @return {number}
     */
    getWq() {
        return this.getLq() / this.ar;
    }

    /**
     * average waiting time in the system (queueing time + service time)
     * @return {number}
     */
    getWs() {
        return (this.getWq() + (1 / this.sr));
    }
}

export default MultiChannel;


