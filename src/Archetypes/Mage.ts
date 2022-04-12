import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _damage: EnergyType;
  private static _mageInstances = 0;
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage._mageInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }
  
  public static createdArchetypeInstances() { 
    return Mage._mageInstances; 
  }
}

export default Mage;