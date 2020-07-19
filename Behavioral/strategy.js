/**
 * EN:
 * This pattern says that, you must have one instance that can change his behaviour, 
 * depending on what you want.
 * ES:
 * En este patron, lo que dice es, tienes una instancia que puede cambiar de comportamiento,
 * dependiendo de lo que necesitas que haga
 */

 /**
  * EN:
  * We're going to create 2 different functions that return one string
  * ES:
  * Crearemos 2 funciones que van a regresar 2 String diferentes
  */

/**
 * @property {function} cook - It returns an String
 */
function Omelette() {
    this.cook = ()=>{
        return "omelette"
    }
}

/**
 * @property {function} cook - It returns an String
 */
function Steak() {
    this.cook = ()=>{
        return "steak"
    }
}

/**
 * EN:
 * This is the function that's going to change the instace of the objects,
 * those instances are our strategies
 * ES:
 * Esta funcion es la que va a cambiar las instancias de los objetos,
 * esas instancias, son nuestras estrategias.
 * 
 * @property {Object} dish - The instance of the strategies
 * @property {Function} order - The setter for the instance
 * @property {Function} serve - The function that calls the instance function
 */

function Restaurant() {
    this.dish = ""
    this.order = (order)=> {
       this.dish = order
    }

    this.serve = ()=>{
        return this.dish.cook()
    }
}


/**
 * EN:
 * We create our instances of the different strategies, and pass them to our function
 * ES:
 * Creamos las instancias de nustras estrategias y se las pasamos a nuestra funcion
 */
const food = new restaurant()
const omelette = new Omelette()
const steak = new Steak()
food.order(omelette)
console.log(food.serve())
food.order(steak)
console.log(food.serve())