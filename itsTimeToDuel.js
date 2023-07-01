class Card {

    constructor({name, cost}) {

        this.name = name;

        this.cost = cost;

    }        

}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Unit extends Card {

    constructor({name, cost, power, resilience}) {

        super({name, cost});

        this.name = name;
        
        this.cost = cost;

        this.power = power;

        this.resilience = resilience;

    }

    attack(target) {

        if (target instanceof Unit) {

            target.resilience -= this.power;

        }

        else {

            console.log("Target must be a Unit card");
            
        }

    }

}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Effect extends Card {

    constructor({name, cost, text, magnitude, stat}) {

        super({name, cost});

        this.name = name;

        this.cost = cost;

        this.magnitude = magnitude;

        this.stat = stat;

        this.text = `You effect the target Unit card's ${this.stat} by ${this.magnitude}`;

    }

    effectPower(target) {

        if (target instanceof Unit) {

            target.power += this.magnitude;

        }

        else {

            console.log("Target must be a Unit card");

        }

    }

    effectResilience(target) {

        if (target instanceof Unit) {

            target.resilience += this.magnitude;

        }

    }

}

const redBeltNinja = new Unit({

    name: "Red Belt Ninja",

    cost: 3,

    power: 3, 

    resilience: 4

});

const blackBeltNinja = new Unit({

    name: "Black Belt Ninja",

    cost: 4, 

    power: 5,

    resilience: 4

});

const hardAlgorithm = new Effect({

    name: "Hard Algorithm",

    cost: 2,
        
    stat: Unit.resilience,
    
    magnitude: 3

})

const unhandledPromiseRejection = new Effect({

    name: "Unhandled Promise Rejection",

    cost: 1,
        
    stat: Unit.resilience,
    
    magnitude: -2

})

const pairProgramming = new Effect({

    name: "Pair Programming",

    cost: 2,
        
    stat: Unit.power,
    
    magnitude: 2

})

hardAlgorithm.effectResilience(redBeltNinja);

unhandledPromiseRejection.effectResilience(redBeltNinja);

pairProgramming.effectPower(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);