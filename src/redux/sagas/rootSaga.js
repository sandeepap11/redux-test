import { put, takeLatest, all, call } from 'redux-saga/effects';
import {getGames} from '../../utils/Api';

function* fetchGames(action) {
  const games = yield call(getGames, action.country);    

  console.log("games from Saga", games);
  

  yield put({ type: "GET_GAMES_SUCCESS", games });
}

function* sortGames(action) {

  console.log("Items in Saga", action.items);
  

  yield put({ type: "SORT_TABLE_SUCCESS", games: action.items });
}


function* actionWatcher() {
     yield takeLatest('GET_GAMES', fetchGames);
     yield takeLatest('SORT_TABLE', sortGames);
     
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}