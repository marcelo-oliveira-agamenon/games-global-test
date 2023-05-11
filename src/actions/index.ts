export const GAME_FETCH_LOADING = 'REDUX_SAGA_GAME_FETCH_LOADING';
export const GAME_FETCH_SUCCEEDED = 'REDUX_SAGA_GAME_FETCH_SUCCEEDED';
export const GAME_FETCH_FAILED = 'REDUX_SAGA_GAME_FETCH_FAILED';
export const TOGGLE_FAVORITE_GAME = 'REDUX_SAGA_TOGGLE_FAVORITE_GAME';
export const TOGGLE_FAVORITE_GAME_SUCESS =
  'REDUX_SAGA_TOGGLE_FAVORITE_GAME_SUCESS';

export const loadFetchGame = () => {
  return {
    type: GAME_FETCH_LOADING,
  };
};

export const toggleFavoriteGame = (game_id: number) => {
  return {
    type: TOGGLE_FAVORITE_GAME,
    game_id,
  };
};
