import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _necromancerInstances = 0;
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._necromancerInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }
  
  public static createdArchetypeInstances():number { 
    return Necromancer._necromancerInstances; 
  }
}

export default Necromancer;