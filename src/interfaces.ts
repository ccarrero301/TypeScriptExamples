///////////////////////////////////////////////////////////////////////

// Creating interfaces

interface IPizza {
    name: string,
    sizes: string[]
};

let pizzaI: IPizza;

function createPizza(name: string, sizes: string[]): IPizza {
    return {
        name, // same as name: name
        sizes
    };
};

pizzaI = createPizza('Pepperoni', ['small', 'medium']);

///////////////////////////////////////////////////////////////////////

// Interfaces with function types

interface Pizza2 {
    name: string,
    sizes: string[],
    getAvailableSizes(): string[]
};

let pizza2: Pizza2;

function createPizza2(name: string, sizes: string[]): Pizza2 {
    return {
        name, // same as name: name
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
};

pizza2 = createPizza2('Pepperoni', ['small', 'medium']);

///////////////////////////////////////////////////////////////////////

// Extending interfaces

interface Sizes {
    sizes: string[]
}

interface Pizza3 extends Sizes {
    name: string,
    getAvailableSizes(): string[]
};

let pizza3: Pizza3;

function createPizza3(name: string, sizes: string[]): Pizza3 {
    return {
        name, // same as name: name
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
};

pizza3 = createPizza3('Pepperoni', ['small', 'medium']);

///////////////////////////////////////////////////////////////////////

// Interfaces and optional properties

interface Sizes {
    sizes: string[]
}

interface Pizza4 extends Sizes {
    name: string,
    toppings?: number,
    getAvailableSizes(): string[]
};

let pizza4: Pizza4;

function createPizza4(name: string, sizes: string[]): Pizza4 {
    return {
        name, // same as name: name
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
};

pizza4 = createPizza4('Pepperoni', ['small', 'medium']);
pizza4.toppings = 1;

///////////////////////////////////////////////////////////////////////

// Interfaces with index signatures

interface Sizes {
    sizes: string[]
}

interface Pizza5 extends Sizes {
    name: string,
    toppings?: number,
    getAvailableSizes(): string[],
    [key: number]: string
};

let pizza5: Pizza5;

function createPizza5(name: string, sizes: string[]): Pizza5 {
    return {
        name, // same as name: name
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
};

pizza5 = createPizza5('Pepperoni', ['small', 'medium']);

pizza5[1] = 'xyz';

pizza5.toppings = 1;

//////////////////////////////////////////////////////////////////////

// Interfaces vs Type Aliases
interface Item {
    name: string;
}

interface Artist extends Item {
    songs: number;
}

interface Artist {
    getSongs(): number;
}

type Artist2 = { name: string; } & Item;

const newArtist: Artist = {
    name: 'ABC',
    songs: 5,
    getSongs() {
        return this.songs;
    }
}

//////////////////////////////////////////////////////////////////////

// Interfaces vs Classes
interface Artist1 {
    name: string;
}

class ArtistCreator1 {
    constructor(public name: string) { }
}

function artistFactory({ name }: /*Artist1*/ ArtistCreator1) {
    return new ArtistCreator1(name);
}

artistFactory({ name: 'Todd' });

//////////////////////////////////////////////////////////////////////
