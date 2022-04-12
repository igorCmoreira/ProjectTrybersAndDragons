import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  protected _player1: Fighter;
  protected _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  get player1(): Fighter { return this._player1; }
  get player2(): Fighter { return this._player2; }

  advantage(): void {
    if (this.player1.strength > this.player2.strength) {
      this.player1.attack(this.player2);
      this.player1.attack(this.player2);
    } else {
      this.player2.attack(this.player1);
      this.player2.attack(this.player1);
    }
  }

  attacks(): void {
    let cont = 1;
    while (cont === 1) { 
      if (this.player1.lifePoints === -1 || this.player2.lifePoints === -1) {
        cont = 0; 
      } else { 
        this.player1.attack(this.player2);
        this.player2.attack(this.player1);
      }
    }
  }
  
  fight(): number {
    this.advantage();
    this.attacks();
    if (this.player1.lifePoints === -1 && this.player2.lifePoints === -1) {
      return 0; // A tie
    }
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}