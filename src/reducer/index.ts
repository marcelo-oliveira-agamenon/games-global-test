import {
  GAME_FETCH_FAILED,
  GAME_FETCH_LOADING,
  GAME_FETCH_SUCCEEDED,
} from '../actions';
import { ActionsSaga, InitialState } from '../interfaces/saga';

const initialState: InitialState = {
  games: [],
  loadingFetchGames: false,
  errorFetchGames: '',
};

export default function reduxSagaReducer(
  state = initialState,
  action: ActionsSaga
) {
  switch (action.type) {
    case GAME_FETCH_LOADING: {
      return {
        ...state,
        loadingFetchGames: true,
        errorFetchGames: '',
      };
    }
    case GAME_FETCH_SUCCEEDED: {
      return {
        ...state,
        data: action.games,
        loadingFetchGames: false,
      };
    }
    case GAME_FETCH_FAILED: {
      return {
        ...state,
        loadingFetchGames: false,
        error: action.message,
      };
    }
    default: {
      return state;
    }
  }
}
