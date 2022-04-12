import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter {
  defense: number;
  energy?: Energy;
  strength: number;
  lifePoints: number;

  levelUp(): void;
  receiveDamage(attackPoints: number): void;
  attack(enemy: (Fighter | SimpleFighter)): void;
  special(enemy: (Fighter | SimpleFighter)): void;

}
