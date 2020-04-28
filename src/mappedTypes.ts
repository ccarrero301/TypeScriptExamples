///////////////////////////////////////////////////////////////////////

// 'typeof' type queries
const person = {
    name: 'Todd',
    age: 27
};

type Person = typeof person;

const anotherPerson: typeof person = {
    name: 'John',
    age: 30
};

///////////////////////////////////////////////////////////////////////

// 'keyof' index type queries

const person1 = {
    name: 'Todd',
    age: 27
};

type Person1 = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

const anotherPerson1: Person = {
    name: 'John',
    age: 30
};

///////////////////////////////////////////////////////////////////////

// 'keyof' generics and lookup types

const person2 = {
    name: 'Todd',
    age: 27
};

type Person2 = typeof person;
type PersonKeys2 = keyof Person;

type PersonTypes2 = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
};

const personName2 = getProperty(person, 'name');

const anotherPerson2: Person = {
    name: 'John',
    age: 30
};

///////////////////////////////////////////////////////////////////////

// 'Readonly' mapped types
interface Person3 {
    name: string;
    age: number;
};

const person3: Person3 = {
    name: 'Todd',
    age: 27
};

type MyReadonly<T> = {
    readonly [prop in keyof T]: T[prop];
};

function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
};

function myFreeze<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj);
};

const newPerson3 = freeze(person3);

///////////////////////////////////////////////////////////////////////

// 'Partial' mapped type
interface Person4 {
    name: string;
    age: number;
};

type MyPartial<T> = {
    [prop in keyof T]?: T[prop];
};

function updatePerson4(person: Person, prop: Partial<Person>) {
    return {
        ...person,
        ...prop
    };
};

const person4: Person4 = {
    name: 'Todd',
    age: 27
};

const updatedPerson4 = updatePerson4(person4, { name: 'ABC' });

console.log(person4);
console.log(updatedPerson4);

///////////////////////////////////////////////////////////////////////

// “Required” Mapped Type, +/- Modifiers
interface Person5 {
    name: string;
    age?: number;
};

function printAge5(person: Required<Person>) {
    return `${person.name} is ${person.age}`;
};

const person5: Required<Person5> = {
    name: 'Todd',
    age: 27
};

const age = printAge5(person5);

///////////////////////////////////////////////////////////////////////

// “Pick” Mapped Type
interface Person6 {
    name: string;
    age: number;
    address: {};
};

const perso6: Pick<Person6, 'name' | 'age'> = {
    name: 'Todd',
    age: 27
};

///////////////////////////////////////////////////////////////////////

// “Record” Mapped Type
let dictionaty: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
};

const item: Record<keyof TrackStates, string> = {
    current: 'js02js9',
    next: '8nlksjsk'
};

dictionaty[0] = item;