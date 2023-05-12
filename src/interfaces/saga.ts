import { Game } from './game';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface InitialState {
  games: Game[];
  loadingFetchGames: boolean;
  errorFetchGames: string;
  game_id?: Game;
}

export interface ActionsSaga {
  type: string;
  games: Game[];
  game?: Game;
  message?: string;
}
