/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this refers to the Global Object(window). Since there is nothing to left of dot,
*    'this' defaults to the window obj
* 2. Implicit Binding - used within a method of an object(e.g. left of dot)
* 3. Explicit Binding - this gets attached to another object assigned to a specific function(uses call, bind, apply)
* 4. New Binding - this is used with constructor
*
* write out a code example of each explanation above
*/

// Principle 1 - Window binding

 let sayName = function() {
    console.log(`My name is ${this}`)
 };
 sayName();

// Principle 2 - Implicit Binding

 let me = {
   name: 'Steve',
   sayName: function() {
     console.log(`${this.name}`);
   }
 };

 me.sayName();

// Principle 3 - Explicit Binding

  let me2 = {
    name: 'Gru'
  };

  let  sayName2 = function() {
    console.log(`My name is also ${this.name}`);
  };

  sayName2.call(me2);

// Principle 4 - New Binding

  let Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
  };

  let labrador = new Animal('black', 'Maggie', 'dog');