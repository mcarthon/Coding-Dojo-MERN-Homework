class Ninja {

    constructor(name = "Week Ling", health = 90, speed = 3, strength = 3) {

        this.name = name;

        this.health = health;

        this.speed = speed;

        this.strength = strength;

    }

    sayName() {

        console.log(`The ninja's name is ${this.name}`);

    }

    showStats() {

        console.log(`
            The ninja's name is ${this.name}.\n
            The ninja's strength is ${this.strength}.\n
            The ninja's speed is ${this.speed}.\n
            The ninja's health is ${this.health}.
        `);        

    }

    drinkSnake() {

        this.health -= 10;

    }        

}

const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();

ninja1.showStats();