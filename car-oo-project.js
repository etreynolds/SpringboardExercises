// PART 1

class Vehicle {
    constructor(make, model, year) {
        this.year = year;
        this.make = make;
        this.model = model;
        // console.log(`Your vehicle is a ${year} ${make} ${model}`)
    }

    honk() {
        return 'Beep.';
    }

    toString() {
        return `Your vehicle is a ${this.year} ${this.make} ${this.model}`;
    }
}

const myVehicle = new Vehicle('Subaru', 'Forester', 2017);

// PART 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}
const myCar = new Car('Toyota', 'Corolla', 2005);

// PART 3

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}

const myMotorcyle = new Motorcycle('Honda', 'Nighthawk', 2000);

// PART 4

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles allowed!';
        }
        if (this.vehicles.length >= this.capacity) {
            return 'All full!';
        }
        this.vehicles.push(newVehicle);
        return 'New vehicle added!';
    }
}

const garage = new Garage(2);