import Race from './Race';

class Orc extends Race {
  private _maxLifePoints:number;
  private static _orcInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._orcInstances += 1;
    this._maxLifePoints = 74;
  }
  
  get maxLifePoints():number { return this._maxLifePoints; }
  static createdRacesInstances() { return this._orcInstances; }
}

export default Orc;