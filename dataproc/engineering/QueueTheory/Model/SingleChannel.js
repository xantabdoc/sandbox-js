/**
 * Single Channel Model (M/M/I):(GD/~/~)
 * @type {SingleChannel}
 */
class SingleChannel {

    /**
     * constructing class
     * @param {number} arrivalRate - average number of arrival user per period of time
     * @param {number} serviceRate - average number of user service per period of time
     */
    constructor(arrivalRate, serviceRate) {
        this.sr = serviceRate;// average number of user service per period of time
        this.ar = arrivalRate;// average number of arrival user per period of time
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
     * @param {number} n - number of customer in the system
     * @return {number}
     */
    getChance(n) {
        if (n === 0) return (1 - this.getUtility());
        return ((this.getUtility() ^ n) * this.getChance(0));
    }

    /**
     * average number of queue
     * @return {number}
     */
    getLq() {
        return (this.getLs() - (1 - this.getChance(0)));
    }

    /**
     * average number of customer waiting in the system
     * @return {number}
     */
    getLs() {
        return (this.getUtility() / this.getChance(0));
    }

    /**
     * average queueing time before service
     * @return {number}
     */
    getWq() {
        return (this.getLq() / this.ar);
    }

    /**
     * average waiting time in the system (queueing time + service time)
     * @return {number}
     */
    getWs() {
        return (this.getLs() / this.ar);
    }
}

export default SingleChannel;
