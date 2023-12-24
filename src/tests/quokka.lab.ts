
const aa: number = 33;

33 - 99; // -66

77 + 88; // 165

async function foo() {
    return 33;
}

foo(); // Promise { 33 }  // 33

//export {} // turns it into a module, allowing top-level awaits.
//await foo(); // 33

