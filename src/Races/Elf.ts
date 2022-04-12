import Race from './Race';

class Elf extends Race {
  private _maxLifePoints:number;
  private static _elfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._elfInstances += 1;
    this._maxLifePoints = 99;
  }
  
  get maxLifePoints():number { return this._maxLifePoints; }
  static createdRacesInstances() { return this._elfInstances; }
}

export default Elf;