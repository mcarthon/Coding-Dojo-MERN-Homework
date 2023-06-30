// Number One - undefined

var hello;

console.log(hello);

hello = "world";

// Number Two - magnet

var needle;

function test() {

    var needle;

    needle = "magnet";

    console.log(needle);

}

needle = "haystack";

test();

// Number Three - super cool

var brendan;

function print() {

    brendan = "only okay";

    console.log(brendan);

}

brendan = "super cool";

console.log(brendan);

// Number Four - chicken half-chicken

var food;

function eat() {

    var food;

    food = "half-chicken";

    console.log(food);

    food = "gone";

}

food = "chicken";

console.log(food);

eat();

// // Number Five - error because mean was not defined in the right position

var mean;

mean();

console.log(food);

mean = function() {

    var food;

    food = "chicken";

    console.log(food);

    food = "fish";

    console.log(food);

}

console.log(food);

// Number Six - undefined rock R&B

var genre;

function rewind() {

    var genre;

    genre = "rock";

    console.log(genre);

    genre = "R&B";

    console.log(genre);    

}

console.log(genre);

genre = "disco";

rewind();

// Number Seven - san jose seattle burbank san jose

function learn() {

    var dojo;

    dojo = "seattle";

    console.log(dojo);

    dojo = "burbank";

    console.log(dojo);

}

dojo = "san jose";

console.log(dojo);

learn();

console.log(dojo);

// Number Eight - { "name": "Chicago", "students": 65, "hiring": true } 
// second call throws an error for trying to redifine const variable 

function makeDojo(name, students) {

    const dojo = {};

    dojo.name = name;

    dojo.students = students;

    if (dojo.students > 50) {

        dojo.hiring = true;

    }

    else if (dojo.students <= 0) {

        dojo = "closed for now";

    }

    return dojo;

}

console.log(makeDojo("Chicago", 65));

console.log(makeDojo("Berkeley", 0));