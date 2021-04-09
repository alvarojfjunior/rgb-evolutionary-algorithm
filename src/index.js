const RGBIndividual = require('./classes/RGBIndividual')

function getRandomIndividual() {
    const individual = new RGBIndividual(
        parseInt(Math.random() * (255 - 0) + 0), // gene 1
        parseInt(Math.random() * (255 - 0) + 0), // gene 2
        parseInt(Math.random() * (255 - 0) + 0), // gene 3
    )
    individual.getIndividualFitness()
    individual.printIndividual()
    return individual
}

function getRandomPopulation(size) {
    const arr = [];
    for (let i = 0; i < size; i++)
        arr.push(getRandomIndividual())
    return arr;
}

function getBetterIndividuals(arr, quantity, elitismQuantity) {
    // GET ELITIMS
    const elitism = arr.sort((a, b) => b.fitness - a.fitness).slice(0, elitismQuantity);

    // GET SELECTION INDIVIDUALS
    const selection = arr.sort((a, b) => b.fitness - a.fitness).slice(0, quantity);

    const output = elitism.concat(selection);

    output.map(e => e.printIndividual())

    return output
}


console.log('\n\nINITIAL POPULATION')
var mainPopulation = getRandomPopulation(10)

for (let i = 0; i < 5; i++) {
    console.log('\n\nSELECTED POPULATION')
    const bettersIndividuals = getBetterIndividuals(mainPopulation, 5, 2); // 5 selections, and 2 betters  

    console.log('\n\nCROSS-OVED POPULATION')
    const crossOvedIndividuals = bettersIndividuals.map(mainIndividual => {
        const otherIndividual = bettersIndividuals[parseInt(Math.random() * (bettersIndividuals.length - 0) + 0)]
        const newIndividual = mainIndividual.handleCrossOver(otherIndividual)
        newIndividual.printIndividual()

        return newIndividual;
    })

    console.log('\n\nMUTATED POPULATION')
    const mutatedIndividuals = crossOvedIndividuals.map(individual => {
        individual.handleMutation()
        individual.printIndividual()
        return individual
    })

    mainPopulation = bettersIndividuals.concat(mutatedIndividuals);

    console.log('\n\nNEW POPULATION')
    mainPopulation.map(individual => individual.printIndividual())
}



