// function Potion(name) {
//     //this code sets the name of the potion to name variable passed in 
//     this.types =['strength','agility','health'];
//     this.name = name || this.types[Math.floor(Math.random()*this.types.length)]


//     if(this.name  === 'health'){
//         this.value = Math.floor(Math.random()*10 +30)
//     } else {
//         this.value = Math.floor(Math.random()*5+7)
//     }
// }


// ES6

class Potion {
    // constuctor
    constructor(name){
        this.types = ['strength','agility','health'];
        this.name = name || this.types[Math.floor(Math.random()*this.types.length)];

        if(this.name ==='health'){
            this.value = Math.floor(Math.random()*10 +30)
        } else {
            this.value = Math.floor(Math.random()*5+7)
        }
    }

}

module.exports = Potion