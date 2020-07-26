/**
 * EN:
 * This pattern is commonly used, when we have different parts that tries to communicate each other,
 * but the communication needs to have some sort of control over the different messages
 * ES:
 * Este patron es usado normalmente, cuando tenemos diferentes partes que se quieren comunicar,
 * pero la comunicacion debe tener cierto control sobre los mensajes.
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

 function History() {
    this.members = {}
 }

 History.prototype = {
     addStudent: function(student) {
         this.members[student.name] = student
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