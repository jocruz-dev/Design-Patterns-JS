/**
 * EN:
 *  This pattern says taht, you only need to have one single instance of the object
 * that you are using. This is for limiting the number of instances allowed on a program.
 * 
 * ES:
 * Este patron dice, que debes de tener solamente una instancia del objeto que estas usando. 
 * Esto para limitar las instancias de los objetos permitidas en un programa.
 */


 /**
  * This is the function that's going to create our instance.
  * @return {Object} This object includes - 
  * @function {Object} getStoreInstance - That validates if the instance exists or not
  */
 const Singleton = (function Process(params) {
     function Store(state) {
         this.product = "apples"
         this.price = ()=>{
             return state * 2
         }
     }
     let instance;
     /**
      * If the instance exist, it only returns the same instance
      */
     return {
         getStoreInstance: ()=>{
             if(!instance)
                instance = new Store()
            return instance
         }
     }
 })()
/**
 * We create to different objects, but they are pointing to the same instance
 */
 const firstInstance = Singleton.getStoreInstance()
 const secondInstance = Singleton.getStoreInstance()

 console.log(firstInstance === secondInstance)