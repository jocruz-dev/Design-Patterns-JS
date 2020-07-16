/**
 * EN:
 * The factory pattern says that, you need to create one single function
 * that creates as many objects as you want
 * 
 * 
 * ES:
 * El patron de fabrica dice que, debes de crear una sola funcion 
 * que pueda crear tantos objetos quieras.
 */


 /**
  * Function that has different properties
  * @property {number} quantity - Number of eggs
  * @property {string} name - The name of the object
  * @property {number} size - Size of the egg
  */

 function Egg(quantity) {

    this.cuantity = quantity
    this.name = 'egg'
    this.size = 10
     
 }

  /**
  * Function that has different properties
  * @property {number} quantity - Number of apples
  * @property {string} name - The name of the object
  * @property {number} size - Size of the apple
  */

 function Apple(quantity) {

    this.cuantity = quantity
    this.name = 'apple'
    this.size = 2
     
 }


/**
 * Function in charge of the creation of objects
 * @property {function} create - This function validates wich object has to create and returns it
 */
function Factory() {
    this.create = (quantity, type)=>{
        switch (type) {
            case 1:
                return new Egg(quantity)
                break;
            case 2:
                return new Apple(quantity)
                break;
            default:
                break;
        }
    }
} 


/**
 * After we create the functions, we make an instance of the Factory
 * and after that we can start creating objects and use them as we pleased
 */
const store = new Factory
const products = []

products.push(store.create(12,1))