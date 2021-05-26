function Student(name, n1, n2, n3){
    this.name = name,
    this.nota1 = n1,
    this.nota2 = n2,
    this.nota3 = n3,

    this.calculate = function(){
        return (this.nota1+this.nota2+this.nota3)/3 
    },

    this.reportCard = function(note){
        if(note < 5){
            return `Final Grade: ${note.toFixed(1)}\nFAILED: Missing ${(5-note).toFixed(1)}` 
        }
        else {
            return `Final Grade: ${note.toFixed(1)}\nPASS`  
        }
    }
}

var s1 = new Student('Carlos', 5, 4, 2)
var s2 = new Student('Joana', 10, 8, 9)

console.log(s1.reportCard(s1.calculate()))
