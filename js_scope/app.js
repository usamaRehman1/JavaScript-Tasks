// What is Scope?
// Scope defines where variables, functions, and objects are accessible in your code.

// Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope (ES6)
// 4. Lexical (Static) Scope
// 5. Module Scope (ES6 Modules)

// There are three variables in javaScript
// var => global Scope / function Scope
// let => global Scope / block scope 
// const => global Scope / block scope

// 1. Global Scope
// Variables declared outside any function or block.
// Accessible from anywhere in the program.

let globalVar = "i am global variable";

function showGlobal() {
    console.log(globalVar) //  i am global
}
showGlobal()

// 2. Function Scope
// Variables declared inside a function using var, let, or const.
// Only accessible within that function.

function showFun() {
    let funcVar = "i am function variable"
    console.log(funcVar) // i am function variable
}
showFun();
// console.log(funcVar) // ReferenceError: funcVar is not defined

// 3. Block Scope (ES6)
// Variables declared with let or const inside { } (a block).
// Not accessible outside the block.

if (true) {
    let blockVar = "i am block variable";
    console.log(blockVar) // i am block variable
    // var ignore block scope
    var varAsBlockVar = "i am block but in var";
    console.log(varAsBlockVar) // i am block but in var
}
// console.log(blockVar) //ReferenceError: blockVar is not defined
console.log(varAsBlockVar) // i am block but in var

// 4. Lexical (Static) Scope
// Functions in JavaScript remember the scope where they were created, not where they are executed.

function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar); // i am outer ----> Accessible (lexical scope)
    }
    inner();
}
outer();

// 5. Module Scope (ES6 Modules)
// In JavaScript modules (.mjs or type="module"), variables declared are scoped to that module only.

// In index.html script tag must contain attribute of type with value is module (type="module")
// Normal Script => <script src="app.js"></script> ---> connot use import and export
// Module Script => <script type="module" src="app.js"></script> ---> can use import and export

//  --------------index.html--------------------
{/* <script type="module" src="file1.mjs"></script> */}
{/* <script type="module" src="file2.mjs"></script> */}

// file1.mjs
let moduleVar = "I am module scoped";
export default moduleVar;

// file2.mjs
import moduleVar from './file1.mjs';
console.log(moduleVar); // Accessible here