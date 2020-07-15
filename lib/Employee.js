// TODO: Write code to define and export the Employee class
//created class of employee
class Employee {
    //Constructor function to hold user input values
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
//retrival method for names
    getName(){
        return this.name;
    }
//retrival method for id
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
//retrival method for role
    getRole(){
        return "Employee"
    }

}

module.exports = Employee;