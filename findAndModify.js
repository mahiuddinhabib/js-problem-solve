/*
Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. 
If found, modify their age property. Print the updated array.
*/

const peoples = [
    {
        name: "Alice",
        age: 23
    },
    {
        name: "Bob",
        age: 30
    },
    {
        name: "Charlie",
        age: 22
    },
    {
        name: "Diana",
        age: 28
    }
];

const findAndModify = (peoples, name, age) => {
    peoples.forEach((people) => {
        if (people.name === name) {
            people.age = age;
        }
    });
    return peoples;
};

console.log(findAndModify(peoples, "Bob", 31));