import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  
  constructor(_name: string) {
    this._name = _name;
    this._special = 0;
    this._cost = 0;
  }

  get name():string { return this._name; }
  get special():number { return this._special; }
  get cost():number { return this._cost; }

  abstract get energyType(): EnergyType;

  public static createdArchetypeInstances():number { 
    throw new Error('Not implemented'); 
  }
}
export default Archetype;