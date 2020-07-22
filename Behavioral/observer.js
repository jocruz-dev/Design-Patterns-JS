/**
 * EN:
 * This pattern is for listening some functions with only one instance of an Object, 
 * we need 2 mayor things for this: 
 *  - Observers => Will be the functions that we're going to listen to
 *  - Subjects => The function that's going to listen for the observers
 * 
 * ES:
 * Este patron es para escuchar unas funciones desde una sola instancia, 
 * necesitamos 2 cosas para esto:
 *  - Observers => Son las funciones que se van a escuchar 
 *  - Subjects => La funcion que va a escuchar a los observers
 */

 /**
  * This will be our first observer
  */
 function Mexico() {
     console.log("Mexico")
 }

 /**
  * This will be our second observer
  */
 function Colombia() {
    console.log("Colombia")
}

/**
 * This will be the function that is going to be our subscriber
 * @property {Array} observers - Our list of observers
 */

function Subject() {
    this.observers = []    
}

/**
 * We need 3 methods for this function
 * @property {Function} subuscribe - This function will allow us to add a new observer
 * @property {Function} unsubscribe - This is for removing one function from the list of observers
 * @property {Function} fire - This function will call all our observers in our list
 */

Subject.prototype = {
    subscribe: function(observer) {
        this.observers.push(observer)
    },
    unsubscribe: function(observer) {
        this.observers = this.observers.filter((fn)=>{
            if(fn != observer)
                return fn
        })
    },
    fire: function() {
        this.observers.forEach((fn)=>{
            fn.call()
        })
    }
}

const subject = new Subject()
subject.subscribe(Mexico)
subject.fire()
subject.subscribe(Colombia)
subject.fire()
subject.unsubscribe(Mexico)
subject.fire()