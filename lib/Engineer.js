// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//importing employee class
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, github){
        this.name = name;
        this.id = name;
        this.email = email;
        this.github = github;
    }
}