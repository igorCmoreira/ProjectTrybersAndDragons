import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _warriorInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._warriorInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }
  
  public static createdArchetypeInstances():number { 
    return Warrior._warriorInstances; 
  }
}

export default Warrior;