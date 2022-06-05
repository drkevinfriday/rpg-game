class Character {
  constructor (name=''){
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95)
        this.strength = Math.floor(Math.random() * 5 + 7)
        this.agility = Math.floor(Math.random() * 5 + 7)
  }

  isAlive() {
    if(this.health === 0){
        return false;
    }
    return true;
  }

  getHealth(){
    return `${this.name}'s health is now ${this.health}!`
  }

  getAttackValue() {
    //this line of code get the Enemy strength and assigns it toplayer attack
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  }

  reduceHealth = function (health) {
    //this line of code reudces health by the # health var that is passed in 
    this.health  -= health
        
    if(this.health < 0 ){
        this.health = 0;
    }
  }
}


// function Character () {}



// Character.prototype.isAlive = function () {
//   if(this.health === 0){
//       return false;
//   }
//   return true;
// }

// Character.prototype.getHealth = function(){
//   return `${this.name}'s health is now ${this.health}!`
// }



// Character.prototype.getAttackValue = function () {
//   //this line of code get the Enemy strength and assigns it toplayer attack
//   const min = this.strength - 5;
//   const max = this.strength + 5;

//   return Math.floor(Math.random() * (max - min) + min);
// }

// Character.prototype.reduceHealth = function (health) {
//   //this line of code reudces health by the # health var that is passed in 
//   this.health  -= health
      
//   if(this.health < 0 ){
//       this.health = 0;
//   }
// }
// // Character Export object constructor

// console.log(new Character().getHealth())

module.exports = Character