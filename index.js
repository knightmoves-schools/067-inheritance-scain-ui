class Agable {
    constructor(year){
        this.year = year;
    }

    age() {
        const currentYear = new Date().getFullYear(); 
        return currentYear - this.year;
    }

}



class Company{
    constructor(name, taxId, yearEstablished, taxRate){
        super(yearEstablished);
        this.name = name;
        this.id = taxId;
        this.taxRate = taxRate;
    }
}

class Person{
    constructor(name, ssn, birthYear, taxRate){
        super(birthYear);
        this.name = name;
        this.id = ssn;
        this.taxRate = taxRate;
    }
}

class Car{
    constructor(model, vin, year){
        super(year);
        this.name = model;
        this.id = vin;
        this.year = year;
    }
}
