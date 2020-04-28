///////////////////////////////////////////////////////////////////////

// Number types, arguments and functions
const pizzaCost: number = 10;
const pizzaToppingsNumber: number = 2;

function calculatePrize(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePrize(pizzaCost, pizzaToppingsNumber);

console.log(`Pizza costs: ${cost}`);

///////////////////////////////////////////////////////////////////////

// String type and string literals
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const cupponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(cupponMessage);

///////////////////////////////////////////////////////////////////////

// Boolean type and boolean literals
const pizzasNumber: number = 5;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzasNumber)) {
    console.log(`You're entitled to a discount!`)
} else {
    console.log(`Order more than 3 pizzas for a discount`);
}

///////////////////////////////////////////////////////////////////////

// The 'Any' type
let couponAny: any;

couponAny = 25;
couponAny = '25';
couponAny = true;

///////////////////////////////////////////////////////////////////////

// Implicit and explicit types
let implciitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';

///////////////////////////////////////////////////////////////////////

// Void type
let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);

///////////////////////////////////////////////////////////////////////

// Never type
function orderError(error: string): never {
    throw new Error(error);

    // unreachable code
}

orderError('Something went wrong');

///////////////////////////////////////////////////////////////////////

// Null, undefined, strick null checks
let couponNull: string | null = 'pizza25';

function removeCoupon(): void {
    couponNull = null;
}

console.log(couponNull);

removeCoupon();

console.log(couponNull);

///////////////////////////////////////////////////////////////////////

// Union and literal types
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size: ${pizzaSize}`);