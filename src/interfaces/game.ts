export interface Game {
  id: number;
  category: Category;
  name: string;
  picture: string;
  rating: number;
  popularity: string;
  isFavorite: boolean;
}

type Category = 'Slots' | 'Table' | 'Card';
