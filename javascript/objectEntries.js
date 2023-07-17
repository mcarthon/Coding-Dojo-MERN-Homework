const objectEntries = object => {

    const keys = Object.keys(object);

    const values = Object.values(object);

    let result = [];

    for (let index = 0; index < keys.length; ++ index) {

        let sublist = [];

        sublist.push(keys[index]);

        sublist.push(values[index]);

        result.push(sublist);

    }

    return result;

};

const obj1 = {

    name: "Pizza",

    calories: 9001,

  };

console.log(objectEntries(obj1));


const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

const obj2 = Object.assign(Object.create(proto), {

    firstName: "Foo",

    lastName: "Bar",

    age: 13,

  });

console.log(objectEntries(obj2));