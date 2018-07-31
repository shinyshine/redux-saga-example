import { call, fork, select, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { addPhotoApi } from 'Services/photoApi'

import { photoActions } from './actions'

import { serviceSaga } from 'Services/sagaHelper'

export function* addPhoto({ payload }) {
	const data = yield call(addPhotoApi, payload)
	yield delay(1000)
	yield call(serviceSaga, data, {
		fulfilled: photoActions.photoAdded
	})
}

export function* watchAddPhoto() {
	yield takeLatest(photoActions.ADD_PHOTO, addPhoto)
}

export const photoSagas = [
	fork(watchAddPhoto)
]
