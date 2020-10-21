// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Variable for Employee
const Employee = require("./Employee");

// Intern class extends Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
