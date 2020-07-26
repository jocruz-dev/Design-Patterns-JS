/**
 * EN:
 * This pattern is commonly used, when we have different parts that tries to communicate each other,
 * but the communication needs to have some sort of control over the different messages
 * ES:
 * Este patron es usado normalmente, cuando tenemos diferentes partes que se quieren comunicar,
 * pero la comunicacion debe tener cierto control sobre los mensajes.
 */

 /**
  * EN:
  * This is the function that's going to create the different parts in communication
  * ES:
  * Esta es la funcion que va a crear las diferentes partes en comunicacion
  * 
  * @property {String} name - The name of the Student
  * @property {Object} subject - The name of the mediator
  * @property {Function} send - The trigger function that connects to the mediator
  * @property {Function} receive - This function is the one in charge of getting the message from the mediator
  */
 function Student(name) {
     this.name = name     
     this.subject = null
 }

 Student.prototype = {
     send: function(message, receiver) {
         this.subject.send(message, this, receiver)
     },
     receive: function(message, sender) {
         console.log(`${message} from ${sender.name} to ${this.name}`)
     }
 }

 /**
  * EN:
  * This is going to be our mediator, we need 2 functions,
  *  - addStudent() => We need to add the instances of the functions thar're going 
  *                    to communicate
  *  - send() => This function calls the receive method from the instance that we are passing
  */
 function History() {
    this.members = {}
 }

 History.prototype = {
     addStudent: function(student) {
         this.members[student.name] = student
         //We need to add the definition of this scope in order to have access to the functions
         student.subject = this
     },
      send: function(message, from, receiver) {
          receiver.receive(message, from)
      }
 }



const history = new History()
const josh = new Student("Josh")
const sara = new Student("Sara")
history.addStudent(josh)
history.addStudent(sara)
history.send("hola",josh,sara)