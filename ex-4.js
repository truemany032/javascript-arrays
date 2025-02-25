const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
const employeesObject =
  {
    name: "",
    age: null,
    hobbies: [],
  };
employees.push(employeesObject);
employees.push(employeesObject);
employees[2].name = "Alicia";
employees[2].age = 29;
employees[2].hobbies = ["Shopping", "Reading novels"];

employees[3].name = "Kody";
employees[3].age = 19;
employees[3].hobbies = ["Computer Game", "Wakeboard"];
console.log(employees);