class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }
}



const person1 = new Person("Rahul", 29, "Biyani Nagar, Tukum, Chandrapur");

console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.getAddress());

