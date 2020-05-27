import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewEntrySuccess, TYPE_NEW_ENTRY, createNewEntryError } from '../actions/newEntry';

function* createNewEntry(action) {
    try {
        const user = yield call((action) =>
            console.log('Action', action)
        , action);
        yield put(createNewEntrySuccess(user));
    } catch (e) {
        console.log(e);
        yield put(createNewEntryError(e));
    }
}

export function* newEntrySaga() {
    yield takeEvery(TYPE_NEW_ENTRY, createNewEntry)
}
