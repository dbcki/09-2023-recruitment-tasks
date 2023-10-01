const { of, zip } = require('rxjs');
const { filter, map, reduce } = require('rxjs/operators');

let persons = [
  { id: 1, name: "Jan Kowalski" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Jarek Kaczka" }
];

let ages = [
  { person: 1, age: 18 },
  { person: 2, age: 24 },
  { person: 3, age: 666 }
];

let locations = [
  { person: 1, country: "Poland" },
  { person: 3, country: "Poland" },
  { person: 1, country: "USA" }
];

const persons$ = of(persons);
const ages$ = of(ages);
const locations$ = of(locations);

const combinedData$ = zip(persons$, ages$, locations$);

combinedData$
  .pipe(
    map(([persons, ages, locations]) => {
      return persons.filter(person => locations.some(location => location.country === "Poland" && location.person === person.id));
    }),
    map(polishPersons => {
      const polishPersonIds = polishPersons.map(person => person.id);
      return ages.filter(age => polishPersonIds.includes(age.person));
    }),
    map(polishAges => {
      const totalAge = polishAges.reduce((sum, age) => sum + age.age, 0);
      return totalAge / polishAges.length;
    })
  )
  .subscribe(averageAge => {
    console.log(`Average age of persons living in Poland: ${averageAge}`);
});