export const photoActions = {
	ADD_PHOTO: 'ADD_PHOTO',
	ADD_PHOTO_FULFILLED: 'ADD_PHOTO_FULFILLED',

	// 异步操作
	addPhoto: photo => ({
		type: photoActions.ADD_PHOTO,
		payload: photo
	}),

	photoAdded: photo => ({
		type: photoActions.ADD_PHOTO_FULFILLED,
		payload: photo
	})
};
