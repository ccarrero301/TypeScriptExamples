"use strict";
///////////////////////////////////////////////////////////////////////
// Rest Parameters
// function summAll(...arr: number[]) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// }
// const sum = summAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
///////////////////////////////////////////////////////////////////////
// Array spread operator
// const pizzaToppings = ['bacon', 'chilli'];
// const newToppings = ['pepperoni'];
// const allToppings = [...pizzaToppings, ...newToppings];
///////////////////////////////////////////////////////////////////////
// Object separator
// const thePizza = {
//     name: 'Pepperoni'
// }
// const thePizzaToppings = ['pepperoni'];
// const pizzaOrder = {
//     ...thePizza,
//     thePizzaToppings
// };
// const finalPizzaOrder = { ...pizzaOrder };
///////////////////////////////////////////////////////////////////////
// Destructuring Objects
// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni']
// };
// function order({ name: pizzaName = '', toppings: pizzaToppings = [''] }) {
//     return { pizzaName, pizzaToppings }
// }
// const { pizzaName } = order(pizza);
// Destructuring Arrays
// const toppings = ['pepperoni', 'bacon', 'chilli']
// const [first, second, third] = toppings;
// function logToppings([first = '', second = '', third = '']: any) {
//     console.log(first, second, third);
// }
// logToppings(toppings);
///////////////////////////////////////////////////////////////////////
// Number types, arguments and functions
// const pizzaCost: number = 10;
// const pizzaToppings: number = 2;
// function calculatePrize(cost: number, toppings: number): number {
//     return cost + 1.5 * toppings;
// }
// const cost: number = calculatePrize(pizzaCost, pizzaToppings);
// console.log(`Pizza costs: ${cost}`);
///////////////////////////////////////////////////////////////////////
// String type and string literals
// const coupon: string = 'pizza25';
// function normalizeCoupon(code: string): string {
//     return code.toUpperCase();
// }
// const cupponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
// console.log(cupponMessage);
///////////////////////////////////////////////////////////////////////
// Boolean type and boolean literals
// const pizzas: number = 5;
// function offerDiscount(orders: number): boolean {
//     return orders >= 3;
// }
// if (offerDiscount(pizzas)) {
//     console.log(`You're entitled to a discount!`)
// } else {
//     console.log(`Order more than 3 pizzas for a discount`);
// }
///////////////////////////////////////////////////////////////////////
// The 'Any' type
// let coupon: any;
// coupon = 25;
// coupon = '25';
// coupon = true;
///////////////////////////////////////////////////////////////////////
// Implicit and explicit types
// let implciitCoupon = 'pizza25';
// let explicitCoupon: string = 'pizza25';
///////////////////////////////////////////////////////////////////////
// Void type
// let selectedTopping: string = 'pepperoni';
// function selectTopping(topping: string): void {
//     selectedTopping = topping;
// }
// selectTopping('bacon');
// console.log(selectedTopping);
///////////////////////////////////////////////////////////////////////
// Never type
// function orderError(error: string): never {
//     throw new Error(error);
//     // unreachable code
// }
// orderError('Something went wrong');
///////////////////////////////////////////////////////////////////////
// Null, undefined, strick null checks
// let coupon: string | null = 'pizza25';
// function removeCoupon(): void {
//     coupon = null;
// }
// console.log(coupon);
// removeCoupon();
// console.log(coupon);
///////////////////////////////////////////////////////////////////////
// Union and literal types
// let pizzaSize: string = 'small';
// function selectSize(size: 'small' | 'medium' | 'large'): void {
//     pizzaSize = size;
// }
// selectSize('medium');
// console.log(`Pizza size: ${pizzaSize}`);
///////////////////////////////////////////////////////////////////////
// Function types
// function sumOrderFunc(price: number, quantity: number): number {
//     return price * quantity;
// }
// let sumOrderFuncExpr: (price: number, quantity: number) => number;
// sumOrderFuncExpr = (x, y): number => x * y;
// const sum = sumOrderFuncExpr(25, 2);
// console.log(`Total sum: ${sum}`);
///////////////////////////////////////////////////////////////////////
// Function and optional arguments
// let sumOrderFuncExpr: (price: number, quantity?: number) => number;
// sumOrderFuncExpr = (x, y): number => {
//     if (y) {
//         return x * y;
//     }
//     return x;
// }
// const sum = sumOrderFuncExpr(25);
// console.log(`Total sum: ${sum}`);
///////////////////////////////////////////////////////////////////////
// Typed function and default arguments
// let sumOrderFuncExpr: (price: number, quantity?: number) => number;
// sumOrderFuncExpr = (x, y = 1): number => x * y;
// const sum = sumOrderFuncExpr(25);
// console.log(`Total sum: ${sum}`);
///////////////////////////////////////////////////////////////////////
// Object types
// let pizza: {
//     name: string,
//     price: number,
//     getName(): string
// };
// pizza = {
//     name: 'Plane Old Peperony',
//     price: 20,
//     getName() {
//         return pizza.name;
//     }
// };
///////////////////////////////////////////////////////////////////////
// Array types and generics
// let sizes: number[];
// let toppings: Array<string>;
// sizes = [1, 2, 3];
// toppings = ['pepperoni', 'tomatoe', 'bacon'];
///////////////////////////////////////////////////////////////////////
// Tuple types for arrays
// let pizza: [string, number, boolean];
// pizza = ['Pepperoni', 20, true];
///////////////////////////////////////////////////////////////////////
// Type aliases
// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;
// let pizzaSize: Size = 'small';
// const selectSize: Callback = (x) => {
//     pizzaSize = x;
// }
// selectSize('small');
///////////////////////////////////////////////////////////////////////
// Type assertions
// type Pizza = {
//     name: string,
//     toppings: number
// }
// const pizza: Pizza = {
//     name: 'Blazing Inferno',
//     toppings: 5
// };
// const serialized = JSON.stringify(pizza);
// function getNameFromJSON(obj: string) {
//     return (JSON.parse(obj) as Pizza).name;
// }
// getNameFromJSON(serialized);
///////////////////////////////////////////////////////////////////////
// Creating interfaces
// interface Pizza {
//     name: string,
//     sizes: string[]
// };
// let pizza: Pizza;
// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, // same as name: name
//         sizes
//     };
// };
// pizza = createPizza('Pepperoni', ['small', 'medium']);
///////////////////////////////////////////////////////////////////////
// Interfaces with function types
// interface Pizza {
//     name: string,
//     sizes: string[],
//     getAvailableSizes(): string[]
// };
// let pizza: Pizza;
// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, // same as name: name
//         sizes,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// };
// pizza = createPizza('Pepperoni', ['small', 'medium']);
///////////////////////////////////////////////////////////////////////
// Extending interfaces
// interface Sizes {
//     sizes: string[]
// }
// interface Pizza extends Sizes {
//     name: string,
//     getAvailableSizes(): string[]
// };
// let pizza: Pizza;
// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, // same as name: name
//         sizes,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// };
// pizza = createPizza('Pepperoni', ['small', 'medium']);
///////////////////////////////////////////////////////////////////////
// Interfaces and optional properties
// interface Sizes {
//     sizes: string[]
// }
// interface Pizza extends Sizes {
//     name: string,
//     toppings?: number,
//     getAvailableSizes(): string[]
// };
// let pizza: Pizza;
// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, // same as name: name
//         sizes,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// };
// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza.toppings = 1;
///////////////////////////////////////////////////////////////////////
// Interfaces with index signatures
// interface Sizes {
//     sizes: string[]
// }
// interface Pizza extends Sizes {
//     name: string,
//     toppings?: number,
//     getAvailableSizes(): string[],
//     [key: number]: string
// };
// let pizza: Pizza;
// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, // same as name: name
//         sizes,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// };
// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza[1] = 'xyz';
// pizza.toppings = 1;
///////////////////////////////////////////////////////////////////////
// Understanding classes and constructors
// class Pizza {
//     name: string;
//     toppings: string[] = [];
//     constructor(name: string) {
//         this.name = name;
//     }
//     addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni');
// pizza.addTopping('pepperoni');
// console.log(pizza);
///////////////////////////////////////////////////////////////////////
// Public and private members
// class Pizza {
//     public toppings: string[] = [];
//     constructor(private name: string) { }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni');
// pizza.addTopping('pepperoni');
// console.log(pizza);
///////////////////////////////////////////////////////////////////////
// Readonly members
// class Pizza {
//     public toppings: string[] = [];
//     constructor(readonly name: string) { }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni');
// pizza.addTopping('pepperoni');
// console.log(pizza);
///////////////////////////////////////////////////////////////////////
// Setters and getters
// class Sizes {
//     public constructor(public sizes: string[]) { }
//     public set availableSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public get availableSizes() {
//         return this.sizes;
//     }
// }
// const sizes = new Sizes(['small', 'medium']);
// // getter
// console.log(sizes.availableSizes);
// // setter
// sizes.availableSizes = ['medium', 'large'];
// // getter
// console.log(sizes.availableSizes);
// class Pizza {
//     public toppings: string[] = [];
//     public constructor(readonly name: string) { }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni');
// pizza.addTopping('pepperoni');
// console.log(pizza);
///////////////////////////////////////////////////////////////////////
// Classes and inheritance
// class Sizes {
//     public constructor(public sizes: string[]) { }
//     public set availableSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public get availableSizes() {
//         return this.sizes;
//     }
// };
// class Pizza extends Sizes {
//     public toppings: string[] = [];
//     public constructor(readonly name: string, public sizes: string[]) {
//         super(sizes);
//     }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');
///////////////////////////////////////////////////////////////////////
// Abstract classes
// abstract class Sizes {
//     public constructor(public sizes: string[]) { }
//     public set availableSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public get availableSizes() {
//         return this.sizes;
//     }
// };
// class Pizza extends Sizes {
//     public toppings: string[] = [];
//     public constructor(readonly name: string, public sizes: string[]) {
//         super(sizes);
//     }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');
///////////////////////////////////////////////////////////////////////
// Protected members and inheritance
// abstract class Sizes {
//     public constructor(protected sizes: string[]) { }
//     public set availableSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public get availableSizes() {
//         return this.sizes;
//     }
// };
// class Pizza extends Sizes {
//     public toppings: string[] = [];
//     public constructor(readonly name: string, public sizes: string[]) {
//         super(sizes);
//     }
//     public updateSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.updateSizes(['large']);
// console.log(pizza.availableSizes);
///////////////////////////////////////////////////////////////////////
// Interface contracts with implements
// interface SizesInterface {
//     availableSizes: string[]
// };
// abstract class Sizes implements SizesInterface {
//     public constructor(protected sizes: string[]) { }
//     public set availableSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public get availableSizes() {
//         return this.sizes;
//     }
// };
// interface PizzaInterface extends SizesInterface {
//     readonly name: string;
//     toppings: string[];
//     updateSizes(sizes: string[]): void;
//     addTopping(topping: string): void;
// }
// class Pizza extends Sizes implements PizzaInterface {
//     public toppings: string[] = [];
//     public constructor(readonly name: string, public sizes: string[]) {
//         super(sizes);
//     }
//     public updateSizes(sizes: string[]) {
//         this.sizes = sizes;
//     }
//     public addTopping(topping: string) {
//         this.toppings.push(topping);
//     }
// };
///////////////////////////////////////////////////////////////////////
// Static properties and methods
// class Coupon {
//     static allowed = ['Pepperoni', 'Blazzing Inferno'];
//     static create(percentage: number) {
//         return `PIZZA_RESTAURANT_${percentage}`;
//     }
// };
// console.log(Coupon.allowed);
// console.log(Coupon.create(25));
///////////////////////////////////////////////////////////////////////
// A 'this' keyword primer
// function myFunction() {
//     console.log('Function:::', this);
// }
// myFunction();
// const myObj = {
//     myMethod() {
//         console.log('Object:::', this);
//     }
// }
// myObj.myMethod();
// class myClass {
//     myMethod() {
//         console.log('Class:::', this);
//     }
// }
// const myInstance = new myClass();
// myInstance.myMethod();
// const myInstance2 = new myClass();
// myInstance2.myMethod();
///////////////////////////////////////////////////////////////////////
// Exploring 'this' with .call, .apply
// const myObj = {
//     myMethod() {
//         console.log('Object:::', this);
//     }
// }
// //myObj.myMethod();
// function myFunction(...text: string[]) {
//     console.log('Function:::', this, text);
// }
// const bindFunction = myFunction.bind(myObj, 'ABC', 'DEF');
// bindFunction();
// bindFunction('123', '456');
// bindFunction('789', '012');
// myFunction.call(myObj, 'ABC', 'DEF');
// myFunction.apply(myObj, ['ABC', 'DEF']);
///////////////////////////////////////////////////////////////////////
// Arrow functions and lexical scope
// class myClass {
//     myMethod() {
//         const foo = 123;
//         console.log('1', this);
//         setTimeout(() => {
//             console.log(this);
//         }, 0);
//     };
// };
// const myInstance = new myClass();
// myInstance.myMethod();
///////////////////////////////////////////////////////////////////////
// Typing 'this' and 'no implicit this'
// const elem = document.querySelector('.click');
// function handleClick(this: HTMLAnchorElement, event: Event) {
//     event.preventDefault();
//     console.log(this);
//     console.log(this.className);
// };
// elem.addEventListener('click', handleClick, false);
///////////////////////////////////////////////////////////////////////
// 'typeof' type queries
// const person = {
//     name: 'Todd',
//     age: 27
// };
// type Person = typeof person;
// const anotherPerson: typeof person = {
//     name: 'John',
//     age: 30
// };
///////////////////////////////////////////////////////////////////////
// 'keyof' index type queries
// const person = {
//     name: 'Todd',
//     age: 27
// };
// type Person = typeof person;
// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];
// const anotherPerson: Person = {
//     name: 'John',
//     age: 30
// };
///////////////////////////////////////////////////////////////////////
// 'keyof' generics and lookup types
// const person = {
//     name: 'Todd',
//     age: 27
// };
// type Person = typeof person;
// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// };
// const personName = getProperty(person, 'name');
// const anotherPerson: Person = {
//     name: 'John',
//     age: 30
// };
///////////////////////////////////////////////////////////////////////
// 'Readonly' mapped types
// interface Person {
//     name: string;
//     age: number;
// };
// const person: Person = {
//     name: 'Todd',
//     age: 27
// };
// type MyReadonly<T> = {
//     readonly [prop in keyof T]: T[prop];
// };
// function freeze<T>(obj: T): Readonly<T> {
//     return Object.freeze(obj);
// };
// function myFreeze<T>(obj: T): MyReadonly<T> {
//     return Object.freeze(obj);
// };
// const newPerson = freeze(person);
///////////////////////////////////////////////////////////////////////
// 'Partial' mapped type
// interface Person {
//     name: string;
//     age: number;
// };
// type MyPartial<T> = {
//     [prop in keyof T]?: T[prop];
// };
// function updatePerson(person: Person, prop: Partial<Person>) {
//     return {
//         ...person,
//         ...prop
//     };
// };
// const person: Person = {
//     name: 'Todd',
//     age: 27
// };
// const updatedPerson = updatePerson(person, { name: 'ABC' });
// console.log(person);
// console.log(updatedPerson);
///////////////////////////////////////////////////////////////////////
// “Required” Mapped Type, +/- Modifiers
// interface Person {
//     name: string;
//     age?: number;
// };
// function printAge(person: Required<Person>) {
//     return `${person.name} is ${person.age}`;
// };
// const person: Required<Person> = {
//     name: 'Todd',
//     age: 27
// };
// const age = printAge(person);
///////////////////////////////////////////////////////////////////////
// “Pick” Mapped Type
// interface Person {
//     name: string;
//     age: number;
//     address: {};
// };
// const person: Pick<Person, 'name' | 'age'> = {
//     name: 'Todd',
//     age: 27
// };
///////////////////////////////////////////////////////////////////////
// “Record” Mapped Type
// let dictionaty: Record<string, TrackStates> = {};
// interface TrackStates {
//     current: string;
//     next: string;
// };
// const item: Record<keyof TrackStates, string> = {
//     current: 'js02js9',
//     next: '8nlksjsk'
// };
// dictionaty[0] = item;
///////////////////////////////////////////////////////////////////////
// “typeof” and Type Guards
// class Song {
//     constructor(public title: string, public duration: string | number) { }
// }
// function getSongDuration(item: Song) {
//     if (typeof item.duration === 'string') {
//         return item.duration;
//     }
//     const { duration } = item;
//     const minutes = Math.floor(duration / 60000);
//     const seconds = (duration / 1000) % 60;
//     return `${minutes}:${seconds}`;
// }
// const songDurationFromString = getSongDuration(new Song('Wodefful wonderful', '5:31'));
// const songDurationFromMS = getSongDuration(new Song('Wonderful Wonderful', 330000));
// console.log(songDurationFromMS);
///////////////////////////////////////////////////////////////////////
// “instanceof” and Type Guards
// class Song {
//     constructor(public title: string, public duration: number) { }
// }
// class PlayList {
//     constructor(public name: string, public songs: Song[]) { }
// }
// function getItemName(item: Song | PlayList) {
//     if (item instanceof Song) {
//         return item.title;
//     }
//     return item.name;
// }
// const songName = getItemName(new Song('Wonderful Wonderful', 300000));
// const playListName = getItemName(new PlayList('The best songs', [new Song('The man', 300000)]));
// console.log(songName);
// console.log(playListName);
///////////////////////////////////////////////////////////////////////
// User Defined Type Guards
// class Song {
//     constructor(public title: string, public duration: number) { }
// }
// class PlayList {
//     constructor(public name: string, public songs: Song[]) { }
// }
// function IsSong(item: any): item is Song {
//     return item instanceof Song;
// }
// function getItemName(item: Song | PlayList) {
//     if (IsSong(item)) {
//         return item.title;
//     }
//     return item.name;
// }
// const songName = getItemName(new Song('Wonderful Wonderful', 300000));
// const playListName = getItemName(new PlayList('The best songs', [new Song('The man', 300000)]));
// console.log(songName);
// console.log(playListName);
///////////////////////////////////////////////////////////////////////
// Literal Type Guards and “in” Operator
// class Song {
//     constructor(public title: string, public duration: number) { }
// }
// class PlayList {
//     constructor(public name: string, public songs: Song[]) { }
// }
// function IsSong(item: any): item is Song {
//     return 'title' in Song;
// }
// function getItemName(item: Song | PlayList) {
//     if (IsSong(item)) {
//         return item.title;
//     }
//     return item.name;
// }
// const songName = getItemName(new Song('Wonderful Wonderful', 300000));
// const playListName = getItemName(new PlayList('The best songs', [new Song('The man', 300000)]));
// console.log(songName);
// console.log(playListName);
///////////////////////////////////////////////////////////////////////
// Intersection Types
// interface Order {
//     id: string;
//     amount: number;
//     currency: string;
// }
// interface Stripe {
//     card: string;
//     cvc: string;
// }
// interface PayPal {
//     email: string;
// }
// type CheckoutCard = Order & Stripe;
// type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string };
// const order: Order = {
//     id: 'xj28s',
//     amount: 100,
//     currency: 'USD'
// }
// const orderCard: CheckoutCard = {
//     ...order,
//     card: '100 200 300 400',
//     cvc: '123'
// }
// const orderPayPal: CheckoutPayPal = {
//     ...order,
//     email: 'abc@def.com'
// }
///////////////////////////////////////////////////////////////////////
// Discriminated (Tagged) Unions
// interface Order {
//     id: string;
//     amount: number;
//     currency: string;
// }
// interface Stripe {
//     type: 'stripe';
//     card: string;
//     cvc: string;
// }
// interface PayPal {
//     type: 'paypal';
//     email: string;
// }
// type CheckoutCard = Order & Stripe;
// type CheckoutPayPal = Order & PayPal;
// const order: Order = {
//     id: 'xj28s',
//     amount: 100,
//     currency: 'USD'
// }
// const orderCard: CheckoutCard = {
//     ...order,
//     type: 'stripe',
//     card: '100 200 300 400',
//     cvc: '123'
// }
// const orderPayPal: CheckoutPayPal = {
//     ...order,
//     type: 'paypal',
//     email: 'abc@def.com'
// }
// type Payload = CheckoutCard | CheckoutPayPal;
// function checkout(payload: Payload) {
//     if (payload.type === 'stripe') {
//         console.log(payload.card, payload.cvc);
//     }
//     if (payload.type === 'paypal') {
//         console.log(payload.email);
//     }
// }
//////////////////////////////////////////////////////////////////////
// Interfaces vs Type Aliases
// interface Item {
//     name: string;
// }
// interface Artist extends Item {
//     songs: number;
// }
// interface Artist {
//     getSongs(): number;
// }
// type Artist2 = { name: string; } & Item;
// const newArtist: Artist = {
//     name: 'ABC',
//     songs: 5,
//     getSongs() {
//         return this.songs;
//     }
// }
//////////////////////////////////////////////////////////////////////
// Interfaces vs Classes
// interface Artist {
//     name: string;
// }
// class ArtistCreator {
//     constructor(public name: string) { }
// }
// function artistFactory({ name }: /*Artist*/ ArtistCreator) {
//     return new ArtistCreator(name);
// }
// artistFactory({ name: 'Todd' });
//////////////////////////////////////////////////////////////////////
// Function Generics
// class Pizza {
//     constructor(private name: string, private price: number) { }
// }
// class List<T> {
//     private list: T[] = [];
//     addItem(item: T) {
//         this.list.push(item);
//     }
//     getList(): T[] {
//         return this.list;
//     }
// }
// const list = new List<Pizza>();
// list.addItem(new Pizza('Pepperoni', 15));
// const pizzas = list.getList();
// class Coupon {
//     constructor(private name: string) { };
// }
// const anotherList = new List<Coupon>();
// anotherList.addItem(new Coupon('Pizza25'));
//////////////////////////////////////////////////////////////////////
// Function Overloads
// function reverse(str: string): string;
// function reverse<T>(arr: T[]): T[];
// function reverse(stringOrArray: string | any[]): string | any[] {
//     if (typeof stringOrArray === 'string') {
//         return stringOrArray.split('').reverse().join('');
//     }
//     return stringOrArray.slice().reverse();
// }
// reverse('Pepperoni');
// reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
//////////////////////////////////////////////////////////////////////
// Numeric Enums and Reverse Mappings
// enum Sizes {
//     Small,
//     Medium,
//     Large
// }
// enum Sizes {
//     ExtraLarge = 3
// }
// console.log(Sizes.Large, Sizes[Sizes.Large]);
//////////////////////////////////////////////////////////////////////
// String Enums and Inlining Members
// enum Sizes {
//     Small = 'small',
//     Medium = 'medium',
//     Large = 'large'
// }
// let selected: Sizes = Sizes.Small;
// function updateSize(size: Sizes): void {
//     selected = size;
// }
// updateSize(Sizes.Large);
// console.log(selected);
//////////////////////////////////////////////////////////////////////
// Writing Declaration Files
// import * as _ from 'lodash';
// _.chunk([1, 2, 3, 4], 2); // [[1,2], [3,4]]
//////////////////////////////////////////////////////////////////////
// Augmenting Modules with Declarations
// import * as _ from 'lodash';
// _.chunk([1, 2, 3, 4], 2); // [[1,2], [3,4]]
// _.mixin({
//     log(item: string) {
//         console.log(':::', item);
//     }
// });
// _.log('Hello!');
//////////////////////////////////////////////////////////////////////
// Augmenting Modules with Declarations
// export class Foo {
//     constructor(public name: string) { };
// }
