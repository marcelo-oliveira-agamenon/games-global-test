import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchGames } from '../api';
import { ActionsSaga, ResponseGenerator } from '../interfaces/saga';
import {
  GAME_FETCH_FAILED,
  GAME_FETCH_LOADING,
  GAME_FETCH_SUCCEEDED,
  TOGGLE_FAVORITE_GAME,
  TOGGLE_FAVORITE_GAME_SUCESS,
} from '../actions';
import { Game } from '../interfaces/game';

function* fetchGamesSaga() {
  try {
    const games: ResponseGenerator = yield call(fetchGames);
    yield put({ type: GAME_FETCH_SUCCEEDED, games });
  } catch (e) {
    yield put({ type: GAME_FETCH_FAILED, message: 'Error fetching games' });
  }
}

function* toggleGameFavoriteSaga({ game_id }: ActionsSaga) {
  const games: ResponseGenerator = yield call(fetchGames);
  yield put({
    type: TOGGLE_FAVORITE_GAME_SUCESS,
    games: [
      ...(games as Game[]).filter((game) => game.id !== game_id),
      Object.assign({}, (games as Game[])[(game_id as number) - 1]),
    ],
  });
}

function* mySaga() {
  yield takeEvery(GAME_FETCH_LOADING, fetchGamesSaga);
  yield takeEvery(TOGGLE_FAVORITE_GAME, toggleGameFavoriteSaga);
}

export default mySaga;
