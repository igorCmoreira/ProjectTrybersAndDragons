import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _opponents: Array<(SimpleFighter | Fighter)>;
 
  constructor(player: Fighter, opponent: (SimpleFighter | Fighter)[]) {
    super(player);
    this._opponents = opponent;
  }

  public get opponents(): (SimpleFighter | Fighter)[] {
    return this._opponents; 
  }
}