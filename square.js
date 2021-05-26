function square(b, h){
    this.base = b,
    this.height = h,
    this.area = function(){
        return (this.base * this.height)
    }
}

var Q1 = new square(2, 2)

console.log(Q1.area())