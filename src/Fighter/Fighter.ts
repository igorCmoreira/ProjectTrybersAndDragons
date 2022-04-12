import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  energy?: Energy;
  strength: number;
  lifePoints: number;

  levelUp(): void;
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  receiveDamage(attackPoints: number): void;

}
