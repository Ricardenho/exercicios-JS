function employee(name, salary, tax){
    this.name = name,
    this.salary = salary,
    this.tax = tax,

    this.NetSalary = function(){
        return 'R$'+(this.salary - this.tax).toFixed(2)
    },

    this.increaseSalary = function(percentage){
        return 'R$'+((this.salary - this.tax) + ((percentage/100)*this.salary)).toFixed(2)
    }
}

var Emp = new employee('Joao', 6000, 1000)

console.log(Emp.name)
console.log(Emp.salary)
console.log(Emp.tax)
console.log(Emp.NetSalary())
console.log(Emp.increaseSalary(10))

