function Character () {}



Character.prototype.isAlive = function () {
  if(this.health === 0){
      return false;
  }
  return true;
}

Character.prototype.getHealth = function(){
  return `${this.name}'s health is now ${this.health}!`
}



Character.prototype.getAttackValue = function () {
  //this line of code get the Enemy strength and assigns it toplayer attack
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
}

Character.prototype.reduceHealth = function (health) {
  //this line of code reudces health by the # health var that is passed in 
  this.health  -= health
      
  if(this.health < 0 ){
      this.health = 0;
  }
}
// Character Export object constructor

console.log(new Character().getHealth())

module.exports = Character