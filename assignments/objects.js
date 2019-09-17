// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an "id", "email", first name, and "gender". Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
// const example = {
//   "id": 0,
//   name: "Example",
//   "email": "examples@you.edu",
//   "gender": "F",
// }

// Write your intern objects here:

const interns = [
	{
		id: 1,
		email: "mmelloy0@psu.edu",
		first_name: "Mitzi",
		gender: "F"
	},
	{
		speak() {
			console.log(`Hello, my name is ${this.first_name}`);
		},
		id: 2,
		email: "kdiben1@tinypic.com",
		first_name: "Kennan",
		gender: "M"
	},
	{
		id: 3,
		email: "kmummery2@wikimedia.org",
		first_name: "Keven",
		gender: "M"
	},
	{
		id: 4,
		email: "gmartinson3@illinois.edu",
		first_name: "Gannie",
		gender: "M"
	},
	{
		multiplyNums(x, y) {
			return x * y;
		},
		id: 5,
		email: "adaine5@samsung.com",
		first_name: "Antonietta",
		gender: "F"
	}
];

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
// Kennan's "ID"
// Keven's "email"
// Gannie's name
// Antonietta's "Gender"
interns.forEach(e => {
	if (e.first_name === "Mitzi") {
		console.log(e.first_name);
	}
	if (e.first_name === "Kennan") {
		console.log(e.id);
	}
	if (e.first_name === "Keven") {
		console.log(e.email);
	}
	if (e.first_name === "Gannie") {
		console.log(e.first_name);
	}
	if (e.first_name === "Antonietta") {
		console.log(e.gender);
	}
});

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log prov"id"ed as a hint.

let kennan = interns[1];

kennan.speak();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log prov"id"ed as a hint.

let antonietta = interns[4];
console.log(antonietta.multiplyNums(3, 4));
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
	name: "Susan",
	age: 70,
	salutation() {
		console.log(`Me am ${this.name}`);
	},
	child: {
		name: "George",
		age: 50,
		salutation() {
			console.log(`Me am ${this.name}`);
		},

		child: {
			name: "Sam",
			age: 30,
			salutation() {
				console.log(`Me am ${this.name}`);
			}
		}
	}
};

// Log the parent object's name

console.log(parent.name)

// Log the child's age
console.log(parent.child.age)

// Log the name and age of the grandchild
console.log(parent.child.child.age, parent.child.child.name)

// Have the parent speak
parent.salutation()

// Have the child speak
parent.child.salutation()

// Have the grandchild speak
parent.child.child.salutation()
