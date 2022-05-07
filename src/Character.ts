import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import getRandomInt from './utils';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import SimpleFighter from './Fighter/SimpleFighter';

export default class Character implements Fighter {
  private _race: Race;
  private _energy: Energy;
  private _defense: number;
  private _strength: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _archetype: Archetype;
  private _maxLifePoints: number;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    
    this._lifePoints = this.maxLifePoints;
    
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType,
    };
  }

  public get race():Race { return this._race; }
  public get defense(): number { return this._defense; }
  public get strength(): number { return this._strength; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return { ...this._energy }; }
  public get lifePoints(): number { return this._lifePoints; }
  public get archetype(): Archetype { return this._archetype; }
  public get maxLifePoints(): number { return this._maxLifePoints; }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this.defense;
    if (damage === 0) {
      this._defense -= 1;
    }
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack(enemy: (Fighter | SimpleFighter)): void {
    enemy.receiveDamage(this.strength);
  }

  public special(enemy: (Fighter | SimpleFighter)): void {
    enemy.receiveDamage(this.strength * getRandomInt(1.5, 5));
  }

  public levelUp(): void { 
    this._energy.amount = 10;
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this.maxLifePoints;
  }
}
