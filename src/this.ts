///////////////////////////////////////////////////////////////////////

// A 'this' keyword primer

function myFunction() {
    console.log('Function:::', this);
}

myFunction();

const myObj = {
    myMethod() {
        console.log('Object:::', this);
    }
}

myObj.myMethod();

class myClass {
    myMethod() {
        console.log('Class:::', this);
    }
}

const myInstance = new myClass();
myInstance.myMethod();

const myInstance2 = new myClass();
myInstance2.myMethod();

///////////////////////////////////////////////////////////////////////

// Exploring 'this' with .call, .apply

const myObj1 = {
    myMethod() {
        console.log('Object:::', this);
    }
}

//myObj.myMethod();

function myFunction1(...text: string[]) {
    console.log('Function:::', this, text);
}

const bindFunction1 = myFunction1.bind(myObj, 'ABC', 'DEF');
bindFunction1();
bindFunction1('123', '456');
bindFunction1('789', '012');

myFunction1.call(myObj, 'ABC', 'DEF');
myFunction1.apply(myObj, ['ABC', 'DEF']);

///////////////////////////////////////////////////////////////////////

// Arrow functions and lexical scope
class myClass2 {
    myMethod() {
        const foo = 123;
        console.log('1', this);

        setTimeout(() => {
            console.log(this);
        }, 0);
    };
};

const myInstance22 = new myClass2();
myInstance22.myMethod();

///////////////////////////////////////////////////////////////////////

// Typing 'this' and 'no implicit this'
const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
    event.preventDefault();
    console.log(this);
    console.log(this.className);
};

elem.addEventListener('click', handleClick, false);