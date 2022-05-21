const Player = require('../lib/Player.js')
const Potion = require('../lib/Player.js')

jest.mock('../lib/Potion.js');
// test to see is if the player object constructers works
test('Creates a player object',()=>{
    const player = new Player('Dave');

    expect(player.name).toBe('Dave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
        )
})

// test to see if the player stats are correct
test('gets players stats as an object',()=>{
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');

})


test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });

test("gets players health value", ()=>{
    const player = new Player ('Dave')
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})
test('check if player is alive or not', ()=>{
    const player = new Player ('Dave')
    expect(player.isAlive()).toBeTruthy();

    player.health = 0;
  
    expect(player.isAlive()).toBeFalsy();
})

test("subtracts from player's health", ()=>{
    const player = new Player ('Dave')
    const oldHealth = player.health;
    player.reduceHealth(5)


    expect(player.health).toBe(oldHealth-5)

    player.reduceHealth(99999)

    expect(player.health).toBe(0)
})

test("gets player's attack value", ()=>{
    const player = new Player ('Dave')
    player.strength = 10

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
    
})

test('adds a potion to the inventory',()=>{
    const player = new Player ('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion())

    expect(player.inventory.length).toBeGreaterThan(oldCount)
})

test('uses a potion from inventory',()=> { 
    const player = new Player ('Dave');
    //this fills the potion inventory with three potions to use
    player.inventory =[new Potion(),new Potion(),new Potion()]
    //this is the old count of potions
    const oldCount = player.inventory.length;

    //this calls the funtion to use a potion 

    player.usePotion(1)

    expect(player.inventory.length).toBeLessThan(oldCount)

})



// test('gets player`stats as an object')

// test('gets inventory from player or returns false')


