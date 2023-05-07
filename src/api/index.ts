import { Game } from '../interfaces/game';
import { data } from '../data';

export function fetchGames(): Game[] {
  let gameData: Game[] = [];

  setTimeout(() => {
    gameData = data;
  }, 3000);

  return gameData;
}
