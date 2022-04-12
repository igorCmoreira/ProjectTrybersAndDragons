import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _cost: number;
  private _special: number;
  
  constructor(_name: string) {
    this._cost = 0;
    this._special = 0;
    this._name = _name;
  }

  get name():string { return this._name; }
  get cost():number { return this._cost; }
  get special():number { return this._special; }

  abstract get energyType(): EnergyType;

  public static createdArchetypeInstances():number { 
    throw new Error('Not implemented'); 
  }
}

export default Archetype;