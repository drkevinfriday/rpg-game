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

Game.prototype.startNewBattle= function () {
    // determines who turn is irst based on agility
    if(this.player.agility > this.currentEnemy.agility){
        this.isPlayerTurn = true;
    } else{
        this.isPlayerTurn = false;
    }

    //Displaying ths player stats before the battle

    console.log("Your stats are as follows")
    console.table(this.player.getStats())
    // describes the new enemy
    console.log(this.currentEnemy.getDescription())

    this.Battle()

}

Game.prototype.Battle = function() {
    if(this.isPlayerTurn){
        //player prompts will go here
        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name:'action',
                choices: ['Attack', 'Use potion']
            })
            .then(({action})=>{
                if(action ==='Use potion'){
                    // checks to see if any potions are in the invetory
                    if(!this.player.getInventory()){
                        console.log("You dont have any potions")
                        return;
                    }
                    //if inventory is not empty use inquirer to find out which potion to use

                    inquirer
                        .prompt({
                            type: 'list',
                            message: 'Which potion would you like to use?',
                            name: 'action',
                            choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)

                        })
                        .then(({action})=>{
                            console.log("This are the potion action"+ action)


                            const potionDetails = action.split(': ')
                            console.log("This are the potion deatails"+ potionDetails)

                            this.player.usePotion(potionDetails[0]-1)

                            console.log(`You used a ${potionDetails[1]} potion. `)
                        })


                } else{
                    // calls the function to  get enemy attack power
                    const damage = this.currentEnemy.getAttackValue();
                    // this call the reduce health function on the player function
                    this.player.reduceHealth(damage);

                    console.log(`You were attacked by the ${this.currentEnemy.name}`);
                    console.log(this.player.getHealth());
                }
            })
        }
    }



module.exports = Game;