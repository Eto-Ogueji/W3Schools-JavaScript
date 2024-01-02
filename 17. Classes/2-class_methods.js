class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year
    }
}

const myCar = new car("Ogueji", 2024);
console.log("My car is " + myCar.age() + " years old.");