const Potion = require('./Potion')
const Character = require('./Character');
const observe = require('inquirer/lib/utils/events');


class Enemy extends Character { 
   
    constructor(name, weapon){
    super(name);
    // this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    // this.health  = Math.floor(Math.random() * 10 + 85)
    // this.strength = Math.floor(Math.random() * 5 + 5)
    // this.agility = Math.floor(Math.random() * 5 + 5)
    }


    // Methods  that can be called by class
    getDescription () {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

// function Enemy(name, weapon){
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health  = Math.floor(Math.random() * 10 + 85)
//     this.strength = Math.floor(Math.random() * 5 + 5)
//     this.agility = Math.floor(Math.random() * 5 + 5)




// }

// inherit
// Enemy.prototype = Object.create(Character.prototype)
// Enemy.prototype.getHealth = function(){
//     return `${this.name}'s health is now ${this.health}!`
// }
// Enemy.prototype.isAlive = function () {
//     if(this.health === 0){
//         return false;
//     }
//     return true;
// }
// Enemy.prototype.reduceHealth = function (health) {
//     //this line of code reudces health by the # health var that is passed in 
//     this.health  -= health
        
//     if(this.health < 0 ){
//         this.health = 0;
//     }
// }
// Enemy.prototype.getAttackValue = function () {
//     //this line of code get the Enemy strength and assigns it toplayer attack
//     const min = this.strength - 5;
//     const max = this.strength + 5;
  
//     return Math.floor(Math.random() * (max - min) + min);
// }

// Enemy.prototype.getDescription = function() {

//         return `A ${this.name} holding a ${this.weapon} has appeared!`;
// }

module.exports = Enemy;