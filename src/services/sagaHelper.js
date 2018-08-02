import { put } from 'redux-saga/effects';
import * as message from 'Utils/message';

export function* serviceSaga(data, { fulfilled, failed }) {
  if (data.status === 1) {
    yield put(fulfilled(data.data));
    message.success('info success');
  } else if (failed) {
    // 请求失败
    yield put(failed(data.data));
    message.error('error accur');
  } else {
    message.error('error accur');
  }
}

export function* serviceSagaTip(data, { fulfilled, failed }) {
  if (data.status === 1) {
    yield put(fulfilled(data.data));
    message.success('info success');
  } else if (failed) {
    // 请求失败
    yield put(failed(data.data));
    message.error('error accur');
  } else {
    message.error('error accur');
  }
}
