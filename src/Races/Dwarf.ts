import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints:number;
  private static _dwarthInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarthInstances += 1;
  }
  
  get maxLifePoints():number { return this._maxLifePoints; }
  static createdRacesInstances() { return this._dwarthInstances; }
}

export default Dwarf;