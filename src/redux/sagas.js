import { all } from 'redux-saga/effects';
import { photoSagas } from './photo';

export default function* sagas() {
  yield all([...photoSagas]);
}
