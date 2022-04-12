import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  levelUp(): void;
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  receiveDamage(attackPoints: number): void;

}
