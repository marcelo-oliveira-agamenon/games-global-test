import { Game } from './game';

export interface IFilter {
  games: Game[];
  disabled: boolean;
  onChangeFilter: (games: Game[]) => void;
}

export type filterKeys = 'name' | 'rating' | 'popularity';

export type filterTypes = 'ascending' | 'descending';
