/**
 * EN:
 * In this pattern, what we want is to create a function that iterates objects, but with our own rules
 * ES:
 * En este patrón lo que queremos es crear una función que itere objetos, pero con nuestras propias reglas
 */

 const sales = [{number:12},{number:13},{number:10}]


 /**
  * 
  */
 function  Store(items) {
     this.items = items
     this.index = items.length - 1
 }

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

 while(store.hasNext()){
    console.log(store.getNumber())
    console.log(store.next())
 }