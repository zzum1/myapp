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

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const [data] = await response.json();
    console.log(data);
    const {
      address: {
        geo: { lat },
      },
    } = data;
    console.log("geo:", lat);

    if (!response.ok) {
      throw new Error(`Serverio klaida: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

console.log("Fetching users...");
console.log(getUsers());
