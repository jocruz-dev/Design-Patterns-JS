/**
 * EN:
 * In this pattern, what we want is to create a function that iterates objects, but with our own rules
 * ES:
 * En este patrón lo que queremos es crear una función que itere objetos, pero con nuestras propias reglas
 */

 const sales = [{number:12},{number:13},{number:10}]


 /**
  * EN:
  * This function is the one that's goint to iterate our object, it needs some rules in order to work
  * ES:
  * Esta es la funcion que va a iterar nuestro objeto, debe cumplir con ciertass reglas para que funcione
  * 
  * @property {Object} items - The object we're going to iterate
  * @property {Number} index - The index of the current iteration
  */
 function  Store(items) {
     this.items = items
     this.index = items.length - 1
 }

 /**
  * EN:
  * The rules we need are: 
  * ES:
  * Las reglas que necesitamos son:
  * 
  * @property {Function} hasNext - Returns true if the object has another element
  * @property {Function} next - Returns the next object on the iteration
  * 
  * EN:
  * This rule is a custom one, this is what makes the iterator pattern so powerfull
  * ES:
  * Esta regla es customizada, esto es lo que hace este patron tan poderoso
  * @property {Function} getNumber - Returns the exact data we want from the iteration
  * 
  */
 Store.prototype = {
    hasNext: function(){
         return this.index >= 0
     },
    next: function(){
        return this.items[this.index--]
    },
    getNumber: function(){
        return this.items[this.index].number
    }
 }

 const store = new Store(sales)

 /**
  * EN:
  * We can create our own set of rules, like the order of the iteration, 
  * the data we collect from each iteration etc.
  * ES:
  * Podemos crear nuestro propio set de reglas, como el orden de las iteraciones,
  * la informacion que sacamos de cada una, etc.
  */
 while(store.hasNext()){
    console.log(store.getNumber())
    console.log(store.next())
 }