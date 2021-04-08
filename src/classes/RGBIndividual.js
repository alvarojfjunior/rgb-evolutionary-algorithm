module.exports = class RGBIndividual {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.fitness = this.getIndividualFitness();
    }

    getIndividualFitness() {
        return this.fitness = this.r + this.g + this.b
    }

}