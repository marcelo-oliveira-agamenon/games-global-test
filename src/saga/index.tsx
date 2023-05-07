import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchGames } from '../api';
import { ResponseGenerator } from '../interfaces/saga';

function* fetchGamesSaga() {
  try {
    const games: ResponseGenerator = yield call(fetchGames);
    yield put({ type: 'GAME_FETCH_SUCCEEDED', games });
  } catch (e) {
    yield put({ type: 'GAME_FETCH_FAILED', message: 'Error fetching games' });
  }
}

function* mySaga() {
  yield takeEvery('GAME_FETCH_REQUESTED', fetchGamesSaga);
}

export default mySaga;
