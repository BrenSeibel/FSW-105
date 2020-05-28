var employees = []
function employees (name, jobTitle, salary, status = "Contract"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(`name:${name}, jobTitle:${jobTitle}, salary:${salary}, status:${status}`)
    }
    employees.push(this)
}
var faculty = new employees("Bob", "V School Instructor", "3000/hour", "Part time")
var salon = new employees("Melba", "MasterCuts stylist", "2400/monthly")
var services = new employees("Tim", "Office translator", "45/hour", "Part-time")
var labor = new employees("Fernando", "Landscaper", "25/hour", "Contract")

console.log(employees)
faculty.printEmployeeForm()
salon.printEmployeeForm()
services.printEmployeeForm()
rations.printEmployeeForm()