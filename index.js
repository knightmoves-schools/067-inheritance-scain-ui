class Company{
    constructor(name, taxId, yearEstablished, taxRate){
        this.name = name;
        this.id = taxId;
        this.year = yearEstablished;
        this.taxRate = taxRate;
    }
}

class Person{
    constructor(name, ssn, birthYear, taxRate){
        this.name = name;
        this.id = ssn;
        this.year = birthYear;
        this.taxRate = taxRate;
    }
}

class Car{
    constructor(model, vin, year){
        this.name = model;
        this.id = vin;
        this.year = year;
    }
}
