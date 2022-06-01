// needed imports
const inquirer =require('inquirer');
const Enemy = require('./Enemy')
const Player = require('./Player')


function Game (){
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this. enemies = [];
    this.currentEnemy;
    this.player;
}


Game.prototype.initializeGame = function(){
 //populates the enemies array at yh start of the game
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));


    // keep track of which Enemy object is currently fighting the Player. When the game starts, this would be the first object in the array
    this.currentEnemy = this.enemies[0];

    // prompt the user for their name, which will become the Player name

    inquirer
        .prompt({
            type: 'test',
            name: 'name',
            message: 'What is your name?'
        })

        //deconstruct name from the prompt object

        .then(({name})=>{
            this.player = new Player (name)

            //test the object creation 
            console.log(this.currentEnemy, this.player)

            this.startNewBattle()
        })


}



module.exports = Game;