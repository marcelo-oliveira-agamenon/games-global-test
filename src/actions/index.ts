import { Dispatch } from '@reduxjs/toolkit';

export const GAME_FETCH_LOADING = 'REDUX_SAGA_GAME_FETCH_LOADING';
export const GAME_FETCH_SUCCEEDED = 'REDUX_SAGA_GAME_FETCH_SUCCEEDED';
export const GAME_FETCH_FAILED = 'REDUX_SAGA_GAME_FETCH_FAILED';

export const loadFetchGame = () => (dispatch: Dispatch) => {
  dispatch({ type: GAME_FETCH_LOADING });
};

export const fetchGameSucess = () => (dispatch: Dispatch) => {
  dispatch({ type: GAME_FETCH_SUCCEEDED });
};

export const fetchGameError = () => (dispatch: Dispatch) => {
  dispatch({ type: GAME_FETCH_FAILED });
};
