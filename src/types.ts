///////////////////////////////////////////////////////////////////////

// Object types
let pizza: {
    name: string,
    price: number,
    getName(): string
};

pizza = {
    name: 'Plane Old Peperony',
    price: 20,
    getName() {
        return pizza.name;
    }
};

///////////////////////////////////////////////////////////////////////

// Array types and generics
let sizes: number[];
let toppings: Array<string>;

sizes = [1, 2, 3];
toppings = ['pepperoni', 'tomatoe', 'bacon'];

///////////////////////////////////////////////////////////////////////

// Tuple types for arrays
let pizzaTuple: [string, number, boolean];

pizzaTuple = ['Pepperoni', 20, true];

///////////////////////////////////////////////////////////////////////

// Type aliases
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = (x) => {
    pizzaSize = x;
}

selectSize('small');

///////////////////////////////////////////////////////////////////////

// Type assertions
type Pizza = {
    name: string,
    toppings: number
}

const pizzaType: Pizza = {
    name: 'Blazing Inferno',
    toppings: 5
};

const serialized = JSON.stringify(pizzaType);

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);

///////////////////////////////////////////////////////////////////////

// Intersection Types
interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    card: string;
    cvc: string;
}

interface PayPal {
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'xj28s',
    amount: 100,
    currency: 'USD'
}

const orderCard: CheckoutCard = {
    ...order,
    card: '100 200 300 400',
    cvc: '123'
}

const orderPayPal: CheckoutPayPal = {
    ...order,
    email: 'abc@def.com'
}

///////////////////////////////////////////////////////////////////////

// Discriminated (Tagged) Unions
interface Order1 {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe1 {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface PayPal1 {
    type: 'paypal';
    email: string;
}

type CheckoutCard1 = Order1 & Stripe1;
type CheckoutPayPal1 = Order1 & PayPal1;

const order1: Order1 = {
    id: 'xj28s',
    amount: 100,
    currency: 'USD'
}

const orderCard1: CheckoutCard1 = {
    ...order,
    type: 'stripe',
    card: '100 200 300 400',
    cvc: '123'
}

const orderPayPal1: CheckoutPayPal1 = {
    ...order,
    type: 'paypal',
    email: 'abc@def.com'
}

type Payload1 = CheckoutCard1 | CheckoutPayPal1;


function checkout(payload: Payload1) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }

    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}