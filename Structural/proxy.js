/**
 * EN:
 * This pattern, is focused on being a componet that optimize the calls 
 * to an object, through a cache creation
 * ES:
 * Este patron, se enfoca en ser un componente que optimice las llamadas
 * a un objeto, a traves de la creacion de un cache
 */


 /**
  * EN:
  * This is going to simulate the calling of an API
  * ES:
  * Esto va a simular el llamado de una API
  * 
  * @property {Function} getValue - This is going to return the value of the API, depending of what we want
  * 
  */

 const fakeAPI = function () {
    this.getValue = function(type) {
        console.log("calling API")
        switch (type) {
             case "swapi":
                 return "https://swapi.dev/"
                 break;
            case 'pokemon':
                 return "https://pokeapi.co/"
                 break;
             default:
                 break;
         }
    } 
 }

 /**
  * EN:
  * This function will have the logic for the cache and the API calls
  * ES:
  * Esta funcion tendra la logica para el cache y las llamadas a la API
  * 
  * @property {Object} api - The object of the API
  * @property {Object} cache - The object where we're going to stored the data
  * @property {Function} getAPI - The function that's going to call the API and return the data from the cache
  */

 function Proxy() {
    this.api = new fakeAPI()
    this.cache = {}
    this.getAPI = function(type) {
        if(this.cache[type] == null)
            this.cache[type] = this.api.getValue(type)
        return this.cache[type]
     }
 }

 const proxy = new Proxy()
 console.log(proxy.getAPI("pokemon"))
 console.log(proxy.getAPI("swapi"))
 // As we can see, in this last call we use the data stored on the cache
 console.log(proxy.getAPI("pokemon"))

