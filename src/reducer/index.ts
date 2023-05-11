import {
  GAME_FETCH_FAILED,
  GAME_FETCH_LOADING,
  GAME_FETCH_SUCCEEDED,
  TOGGLE_FAVORITE_GAME,
  TOGGLE_FAVORITE_GAME_SUCESS
} from '../actions';
import { ActionsSaga, InitialState } from '../interfaces/saga';

const initialState: InitialState = {
  games: [],
  loadingFetchGames: false,
  errorFetchGames: ''
};

export default function reduxSagaReducer(state = initialState, action: ActionsSaga) {
  switch (action.type) {
    case GAME_FETCH_LOADING: {
      return {
        ...state,
        loadingFetchGames: true,
        errorFetchGames: ''
      };
    }
    case GAME_FETCH_SUCCEEDED: {
      return {
        ...state,
        games: action.games,
        loadingFetchGames: false
      };
    }
    case GAME_FETCH_FAILED: {
      return {
        ...state,
        loadingFetchGames: false,
        error: action.message
      };
    }
    case TOGGLE_FAVORITE_GAME: {
      return {
        ...state,
        game_id: action.game_id
      };
    }
    case TOGGLE_FAVORITE_GAME_SUCESS: {
      return {
        ...state,
        games: action.games
      };
    }
    default: {
      return state;
    }
  }
}
