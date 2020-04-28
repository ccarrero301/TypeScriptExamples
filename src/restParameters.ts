///////////////////////////////////////////////////////////////////////

// Rest Parameters
function summAll(...arr: number[]) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const sumRestParameters = summAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

///////////////////////////////////////////////////////////////////////

// Array spread operator
const pizzaToppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];
const allToppings = [...pizzaToppings, ...newToppings];

///////////////////////////////////////////////////////////////////////

// Object separator
const thePizza = {
    name: 'Pepperoni'
}

const thePizzaToppings = ['pepperoni'];

const pizzaOrder = {
    ...thePizza,
    thePizzaToppings
};

const finalPizzaOrder = { ...pizzaOrder };

///////////////////////////////////////////////////////////////////////

// Destructuring Objects
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

function order({ name: pizzaName = '', toppings: pizzaToppings = [''] }) {
    return { pizzaName, pizzaToppings }
}

const { pizzaName } = order(pizza);

// Destructuring Arrays
const toppings = ['pepperoni', 'bacon', 'chilli']

const [first, second, third] = toppings;

function logToppings([first = '', second = '', third = '']: any) {
    console.log(first, second, third);
}

logToppings(toppings);