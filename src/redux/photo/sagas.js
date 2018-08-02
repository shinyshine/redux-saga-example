import { call, fork, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { addPhotoApi } from 'Services/photoApi';

import { serviceSaga } from 'Services/sagaHelper';
import { photoActions } from './actions';

export function* addPhoto({ payload }) {
	const data = yield call(addPhotoApi, payload);
	yield delay(1000);
	yield call(serviceSaga, data, {
		fulfilled: photoActions.photoAdded
	});
}

export function* watchAddPhoto() {
	yield takeLatest(photoActions.ADD_PHOTO, addPhoto);
}

export const photoSagas = [fork(watchAddPhoto)];
