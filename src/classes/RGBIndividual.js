const chalk = require('chalk');

module.exports = class RGBIndividual {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.fitness = null;
    }

    getIndividualFitness() {
        this.fitness = (this.r + this.g + this.b) * -1
    }

    printIndividual() {
        console.log(chalk.rgb(parseInt(this.r), parseInt(this.g), parseInt(this.b)).underline('## ' + this.fitness + ' ##'))
    }

    handleMutation() {
        const radom = parseInt(Math.random() * (3 - 0) + 0);
        var mudationHate = 2
        mudationHate = parseInt(Math.random() * (-mudationHate - mudationHate) + mudationHate);
        if (radom === 0)
            this.r -= this.r + parseInt(Math.random() * (0 - mudationHate) + 0)
        else if (radom === 1)
            this.g -= this.g + parseInt(Math.random() * (0 - mudationHate) + 0)
        else if (radom === 2)
            this.b -= this.b + parseInt(Math.random() * (0 - mudationHate) + 0)

        this.getIndividualFitness()
    }


    handleCrossOver(otherIndividual) {
        const medIndividual = {
            r: (this.r + otherIndividual.r) / 2,
            g: (this.g + otherIndividual.g) / 2,
            b: (this.b + otherIndividual.b) / 2,
        }
        const  newIndividual = new RGBIndividual(medIndividual.r, medIndividual.g, medIndividual.b)
        newIndividual.getIndividualFitness()
        
        return newIndividual
    }


}