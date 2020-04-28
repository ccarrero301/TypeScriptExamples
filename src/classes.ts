///////////////////////////////////////////////////////////////////////

// Understanding classes and constructors

class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);

///////////////////////////////////////////////////////////////////////

// Public and private members

class Pizza2 {
    public toppings: string[] = [];

    constructor(private name: string) { }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza2 = new Pizza('Pepperoni');
pizza2.addTopping('pepperoni');

console.log(pizza2);

///////////////////////////////////////////////////////////////////////

// Readonly members

class Pizza3 {
    public toppings: string[] = [];

    constructor(readonly name: string) { }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza3 = new Pizza3('Pepperoni');
pizza3.addTopping('pepperoni');

console.log(pizza3);

///////////////////////////////////////////////////////////////////////

// Setters and getters

class Sizes {
    public constructor(public sizes: string[]) { }

    public set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public get availableSizes() {
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);

// getter
console.log(sizes.availableSizes);

// setter
sizes.availableSizes = ['medium', 'large'];

// getter
console.log(sizes.availableSizes);

class Pizza4 {
    public toppings: string[] = [];

    public constructor(readonly name: string) { }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza4 = new Pizza4('Pepperoni');
pizza4.addTopping('pepperoni');

console.log(pizza4);

///////////////////////////////////////////////////////////////////////

// Classes and inheritance

class Sizes5 {
    public constructor(public sizes: string[]) { }

    public set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public get availableSizes() {
        return this.sizes;
    }
};

class Pizza5 extends Sizes5 {
    public toppings: string[] = [];

    public constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza5 = new Pizza5('Pepperoni', ['small', 'medium']);

console.log(pizza5.availableSizes);

pizza5.addTopping('pepperoni');

///////////////////////////////////////////////////////////////////////

// Abstract classes

abstract class Sizes6 {
    public constructor(public sizes: string[]) { }

    public set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public get availableSizes() {
        return this.sizes;
    }
};

class Pizza6 extends Sizes6 {
    public toppings: string[] = [];

    public constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza6 = new Pizza6('Pepperoni', ['small', 'medium']);

console.log(pizza6.availableSizes);

pizza.addTopping('pepperoni');

///////////////////////////////////////////////////////////////////////

// Protected members and inheritance

abstract class Sizes7 {
    public constructor(protected sizes: string[]) { }

    public set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public get availableSizes() {
        return this.sizes;
    }
};

class Pizza7 extends Sizes7 {
    public toppings: string[] = [];

    public constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

const pizza7 = new Pizza7('Pepperoni', ['small', 'medium']);

console.log(pizza7.availableSizes);

pizza7.updateSizes(['large']);

console.log(pizza7.availableSizes);

///////////////////////////////////////////////////////////////////////

// Interface contracts with implements

interface SizesInterface {
    availableSizes: string[]
};

abstract class Sizes8 implements SizesInterface {
    public constructor(protected sizes: string[]) { }

    public set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public get availableSizes() {
        return this.sizes;
    }
};

interface PizzaInterface8 extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class Pizza8 extends Sizes8 implements PizzaInterface8 {
    public toppings: string[] = [];

    public constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
};

///////////////////////////////////////////////////////////////////////

// Static properties and methods

class Coupon {
    static allowed = ['Pepperoni', 'Blazzing Inferno'];

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
};

console.log(Coupon.allowed);
console.log(Coupon.create(25));