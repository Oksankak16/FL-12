class Fighter {
    constructor(obj) {
      this._name = obj.name;
      this._damage = obj.damage;
      this._hp = obj.hp;
      this._strenght = obj.strength;
      this._agility = obj.agility;
      this._win = 0;
      this._lose = 0;
      this.MAX_HP = obj.hp;
    }
    getDamage() {
      return this._damage;
    }
    getName() {
      return this._name;
    }
    getHealth() {
      return this._hp;
    }
    getStrength() {
      return this._strenght;
    }
    getAgility() {
      return this._agility;
    }
    logCombatHistory() {
      return `Name: ${this._name}, Wins: ${this._win}, Loses: ${this._lose}`;
    }
    heal(amount) {
      this._hp + amount > this.MAX_HP ? this._hp = this.MAX_HP : this._hp += amount;
    }
    dealDamage(amount) {
      this._hp - amount > 0 ? this._hp -= amount : this._hp = 0;
    }
    addWin() {
      return this._win++;
    }
    addLoss() {
      return this._lose++;
    }
    attack(defender) {
      let MAX_PROBABILITY = 100;
      let randomHit = Math.round(Math.random() * MAX_PROBABILITY);
      let enemyHit =
        MAX_PROBABILITY - (defender.getStrength() + defender.getAgility());
      if (randomHit > enemyHit) {
        console.log(`${this._name} attack missed`);
      } else {
        defender._hp -= this._damage;
        console.log(
          `${this._name} makes ${this._damage} damage to ${defender.getName()}`
        );
      }
    }
  }
  const myFighter = new Fighter({
    name: "Maximus",
    damage: 20,
    hp: 100,
    strength: 30,
    agility: 25
  });
  console.log(myFighter.getDamage());
  console.log(myFighter.getName());
  console.log(myFighter.getStrength());
  console.log(myFighter.getAgility());
  console.log(myFighter.getHealth());
  function battle(attacker, defender) {
    let dead = getDeadFighter(attacker, defender);
    if (dead) {
      return console.log(`${dead.getName()} is dead and can't fight.`);
    }
    while (attacker.getHealth() > 0 && defender.getHealth() > 0) {
      attacker.attack(defender);
      [attacker, defender] = [defender, attacker];
    }
    let winner =
      attacker.getHealth() > defender.getHealth() ? attacker : defender;
    let loser = attacker.getHealth() < defender.getHealth() ? attacker : defender;
    winner.addWin();
    loser.addLoss();
    console.log(`${winner.getName()} has won!`);
  
    function getDeadFighter(...fighters) {
      return fighters.find(fighter => fighter.getHealth() === 0);
    }
  }
 