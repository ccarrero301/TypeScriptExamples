///////////////////////////////////////////////////////////////////////

// Arrow functions
const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

///////////////////////////////////////////////////////////////////////

// Optional parameters
function multiply(a = 10, b = 25) {
    return a * b;
}

///////////////////////////////////////////////////////////////////////

// Functions without the 'function' keyword
const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    }
}

const toppings = ['Salami'];

const order = {
    pizza,
    toppings
}

///////////////////////////////////////////////////////////////////////

// Function and optional arguments

let sumOrderFuncExprOptional: (price: number, quantity?: number) => number;

sumOrderFuncExprOptional = (x, y): number => {
    if (y) {
        return x * y;
    }
    return x;
}
const sum = sumOrderFuncExprOptional(25);

console.log(`Total sum: ${sum}`);

///////////////////////////////////////////////////////////////////////

// Function types
function sumOrderFunc(price: number, quantity: number): number {
    return price * quantity;
}

let sumOrderFuncExpr: (price: number, quantity: number) => number;

sumOrderFuncExpr = (x, y): number => x * y;

const sumFunctionType = sumOrderFuncExpr(25, 2);

console.log(`Total sum: ${sumFunctionType}`);

///////////////////////////////////////////////////////////////////////

// Typed function and default arguments

let sumOrderFuncExprDefault: (price: number, quantity?: number) => number;

sumOrderFuncExpr = (x, y = 1): number => x * y;

const sumDefault = sumOrderFuncExprDefault(25);

console.log(`Total sum: ${sumDefault}`);

// Function Generics
class Pizza1 {
    constructor(private name: string, private price: number) { }
}

class List<T> {
    private list: T[] = [];

    addItem(item: T) {
        this.list.push(item);
    }

    getList(): T[] {
        return this.list;
    }
}

const list = new List<Pizza1>();
list.addItem(new Pizza1('Pepperoni', 15));
const pizzas1 = list.getList();

class Coupon1 {
    constructor(private name: string) { };
}

const anotherList = new List<Coupon1>();
anotherList.addItem(new Coupon1('Pizza25'));

//////////////////////////////////////////////////////////////////////

// Function Overloads
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

function reverse(stringOrArray: string | any[]): string | any[] {
    if (typeof stringOrArray === 'string') {
        return stringOrArray.split('').reverse().join('');
    }
    return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);