class Simon {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const simonInstance = new Simon("Simon", "Stask");
console.log(simonInstance.getFullName());

class Povilas extends Simon {
    constructor(name, lastName, livesIn) {
        super(name, lastName);
        this.livesIn = livesIn;
    }
}

const povilasInstance = new Povilas("Povilas", "Stask", "UK");
console.log(povilasInstance);
console.log(povilasInstance.getFullName());