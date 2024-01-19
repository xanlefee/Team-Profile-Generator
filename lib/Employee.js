// TODO: Write code to define and export the Employee class
// instantiate means to create a class that returns an object

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
       // this.name = new Employee(newname)

    }

    getId() {
        return this.id; 
      


    }

    getEmail() {
        return this.email;

    }

    getRole() {
       return "Employee"
    }
}


module.exports = Employee;