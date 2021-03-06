const Potion = require('../lib/Potion.js')
const Character = require('./Character')


// ES6
class Player extends Character {

    //constructors
    constructor( name = ''){
        super(name);
        //setting properties of objects
        // this.name = name;
        // this.health = Math.floor(Math.random() * 10 + 95)
        // this.strength = Math.floor(Math.random() * 5 + 7)
        // this.agility = Math.floor(Math.random() * 5 + 7)
    
        this.inventory = [new Potion('health'), new Potion()]
    }

    // methods that can be called by class

    getStats() { 
        return   {
               //uses length to count the number of potions the players has 
               potions: this.inventory.length,
               //uses this to report on the health of  the player 
               health: this.health,
               //uses this to report on the strength of  the player 
               strength: this.strength,
               //uses this to report on the agility of  the player 
               agility: this.agility
           }
       }

    getInventory() {
        if(this.inventory.length){
            return this.inventory
        }
        return false;
        }

    addPotion(potion) {
            this.inventory.push(potion)
        }

    usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch(potion.name){
        case 'agility':
            this.agility += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
    }
        }
}


// function Player( name = ''){
//     //setting properties of objects
//     this.name = name;
//     this.health = Math.floor(Math.random() * 10 + 95)
//     this.strength = Math.floor(Math.random() * 5 + 7)
//     this.agility = Math.floor(Math.random() * 5 + 7)

//     this.inventory = [new Potion('health'), new Potion()]
// }

    // inherit protype methods from Character here

    // Player.prototype = Object.create(Character.prototype)
    
    //returns an object with various player properties
    // Player.prototype.getStats = function (){ 
    //  return   {
    //         //uses length to count the number of potions the players has 
    //         potions: this.inventory.length,
    //         //uses this to report on the health of  the player 
    //         health: this.health,
    //         //uses this to report on the strength of  the player 
    //         strength: this.strength,
    //         //uses this to report on the agility of  the player 
    //         agility: this.agility
    //     }
    // }


    // returns the inventory array or false if empty

    // Player.prototype.getInventory = function() {
    //     if(this.inventory.length){
    //         return this.inventory
    //     }
    //     return false;
    // }

    // Player.prototype.getHealth = function(){
    //     return `${this.name}'s health is now ${this.health}!`
    // }
    // Player.prototype.isAlive = function () {
    //     if(this.health === 0){
    //         return false;
    //     }
    //     return true;
    // }
    // Player.prototype.reduceHealth = function (health) {
    //     //this line of code reudces health by the # health var that is passed in 
    //     this.health  -= health
            
    //     if(this.health < 0 ){
    //         this.health = 0;
    //     }
    // }
    // Player.prototype.getAttackValue = function () {
    //     //this line of code get the player strength and assigns it toplayer attack
    //     const min = this.strength - 5;
    //     const max = this.strength + 5;
      
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
    // Player.prototype.addPotion = function (potion){
    //     this.inventory.push(potion)
    // }

    // Player.prototype.usePotion = function (index) {
    //     const potion = this.getInventory().splice(index, 1)[0];

    //     switch(potion.name){
    //         case 'agility':
    //             this.agility += potion.value;
    //             break;
    //         case 'strength':
    //             this.strength += potion.value;
    //             break;
    //         case 'health':
    //             this.health += potion.value;
    //             break;
    //     }
    // }


    // class Player {

    //     //constructors
    //     constructor( name = ''){
    //         //setting properties of objects
    //         this.name = name;
    //         this.health = Math.floor(Math.random() * 10 + 95)
    //         this.strength = Math.floor(Math.random() * 5 + 7)
    //         this.agility = Math.floor(Math.random() * 5 + 7)
        
    //         this.inventory = [new Potion('health'), new Potion()]
    //     }

    //     // methods that can be called by class

    //     getStats() { 
    //         return   {
    //                //uses length to count the number of potions the players has 
    //                potions: this.inventory.length,
    //                //uses this to report on the health of  the player 
    //                health: this.health,
    //                //uses this to report on the strength of  the player 
    //                strength: this.strength,
    //                //uses this to report on the agility of  the player 
    //                agility: this.agility
    //            }
    //        }

    //     getInventory() {
    //         if(this.inventory.length){
    //             return this.inventory
    //         }
    //         return false;
    //         }

    //     addPotion(potion) {
    //             this.inventory.push(potion)
    //         }

    //     usePotion(index) {
    //     const potion = this.getInventory().splice(index, 1)[0];

    //     switch(potion.name){
    //         case 'agility':
    //             this.agility += potion.value;
    //             break;
    //         case 'strength':
    //             this.strength += potion.value;
    //             break;
    //         case 'health':
    //             this.health += potion.value;
    //             break;
    //     }
    //         }
    // }



module.exports = Player