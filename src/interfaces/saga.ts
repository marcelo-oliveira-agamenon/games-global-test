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
  game_id?: number;
}

export interface ActionsSaga {
  type: string;
  games: Game[];
  game_id?: number;
  message?: string;
}
