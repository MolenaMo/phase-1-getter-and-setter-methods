// Add your Circle class here
let pi = Math.PI //3.14159 represents ratio of circumference 

class Circle{
    constructor(radius){
    this.radius = radius 
}
set diameter(diameter){
   this.radius = diameter / 2
}
set circumference(circumference){
    this.radius = circumference/ (pi * 2)
}
set area(area){
    this.radius= Math.sqrt( area/pi) //a way to return the sq root JS 
}
get diameter(){
    return this.radius * 2
}
get circumference(){
    return pi * this.diameter
}
get area(){
    return pi * (this.radius * this.radius)
}
}