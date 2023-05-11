import { Game } from '../interfaces/game';

let data: Game[] = [
  {
    id: 1,
    name: 'Game 1',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 5,
    category: 'Card',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Game 2',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 4,
    category: 'Card',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Game 3',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 5,
    category: 'Table',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Game 4',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 4,
    category: 'Table',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Game 5',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 5,
    category: 'Table',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Game 6',
    picture: 'https://picsum.photos/200',
    popularity: 'high',
    rating: 5,
    category: 'Slots',
    isFavorite: false,
  },
];

export function fetchGames(): Game[] {
  return data;
}

export function toggleGameFavoriteAPI(id: number): void {
  data.forEach((game) => {
    if (game.id === id) {
      game.isFavorite = !game.isFavorite;
    }
  });
}
