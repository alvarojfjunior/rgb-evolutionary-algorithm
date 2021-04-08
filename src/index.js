const RGBIndividual = require('./classes/RGBIndividual')

function getRandomIndividual() {
    const individual = new RGBIndividual(
        Math.random() * (255 - 0) + 0, // gene 1
        Math.random() * (255 - 0) + 0, // gene 2
        Math.random() * (255 - 0) + 0, // gene 3
    )
    return individual
}

function getRandomPopulation(size) {
    const arr = [];
    for (let i = 0; i < size; i++)
        arr.push(getRandomIndividual())

    return arr;
}

function getBetterIndividuals(arr, quantity, elitismQuantity) {
    const elitism = arr.sort((a, b) => b.fitness - a.fitness).slice(0, elitismQuantity);

    const selection = arr.sort((a, b) => b.fitness - a.fitness).slice(0, quantity);

    Array.prototype.push.apply(selection, elitism)

    return selection
}

function handleMutation (individual) {

}

function handleCrossOver (individual) {
    
}


const population = getRandomPopulation(10)

const bettersIndividualsOfPopulation = getBetterIndividuals(population, 5, 2); // 5 selections, and 2 betters  

console.log(bettersIndividualsOfPopulation)