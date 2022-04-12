import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _rangerInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._rangerInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }
  
  public static createdArchetypeInstances():number { 
    return Ranger._rangerInstances; 
  }
}

export default Ranger;