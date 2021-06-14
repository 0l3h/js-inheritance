`use strict`;

// Транспортное средство
class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        this.dimensions = dimensions;
        this.brand = brand;
        this.model = model;
        this.manufactureDate = manufactureDate;
    };

    getMaxSize() {
        if(this.dimensions.width > this.dimensions.height && this.dimensions.width > this.dimensions.length) {
            return this.dimensions.width;
        } else if(this.dimensions.height > this.dimensions.length) {
            return this.dimensions.height;
        } 
        return this.dimensions.length;
    };

    getAge() {
        return new Date().getFullYear() - this.manufactureDate.getFullYear();
    };
}

// Пассажирский транспорт
class PassengerTransport extends Vehicle {
    constructor(dimensions, brand, model, manufactureDate, passengerLimit, passengerCount) {
        super(dimensions, brand, model, manufactureDate);
        this.passengerLimit = passengerLimit;
        this.passengerCount = passengerCount;
    };

    addPassenger() {
        if(this.passengerCount < this.passengerLimit) {
            this.passengerCount++;
            return true;
        }
        return false;
    };
}

// Грузовой транспорт
class FreightTransport extends Vehicle {
    constructor(dimensions, brand, model, manufactureDate, capacity) {
        super(dimensions, brand, model, manufactureDate);
        this.capacity = capacity;
    };

    checkLoadingPossibility(weight) {
        return weight <= this.capacity;
    };
}

const vehicle = new Vehicle({length: 4431, width: 1904, height: 1249}, "Audi", "R8", new Date(2007, 3, 6));
const passengerTransport = new PassengerTransport({length: 5640, width: 1933, height: 2595}, "Mercedes-Benz", "Sprinter", new Date(2003, 5, 24), 15, 8);
const freightTransport = new FreightTransport({length: 4855, width: 2000, height: 2170}, "Mercedes-Benz", "TN", new Date(1995, 9, 15), 2580);