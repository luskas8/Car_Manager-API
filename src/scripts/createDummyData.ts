import { CarModel } from "../database/models/CarModel";
import { connect, disconnect } from "../database/connection"
(async () => {
  connect();
  const cars = [
    { name: "Emma", brand: "Bradley", country: 34 },
    { name: "Elise", brand: "Conner", country: 62 },
    { name: "Jack", brand: "Lawson", country: 20 },
    { name: "Oliver", brand: "Moss", country: 80 },
    { name: "Jamie", brand: "Reid", country: 52 },
    { name: "Aidan", brand: "Bradley", country: 73 },
    { name: "Jordan", brand: "Gallagher", country: 27 },
    { name: "Erin", brand: "Miles", country: 23 },
    { name: "William", brand: "May", country: 39 },
    { name: "Ethan", brand: "Butler", country: 68 },
  ];
  try {
    for (const car of cars) {
      await CarModel.create(car);
      console.log(`Created user ${car.name} ${car.brand}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();