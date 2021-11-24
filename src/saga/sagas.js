import { put, all, call, takeEvery } from 'redux-saga/effects'
import { ADD_RESULTS, ADD_TO_CART } from '../redux/types'
import axios from 'axios'


export function* addResults() {
    const { data } = yield call(fetchData)
    yield put({type: ADD_RESULTS, payload: data})
}

export function* onAddCart() {
    yield takeEvery(ADD_TO_CART, itemAdded)
}

function* itemAdded(){
    yield alert('Item added')
}

const fetchData = () => {
    return axios.get('https://fakestoreapi.com/products')
}
export default function* rootSaga() {
    yield all([
      onAddCart(),
      addResults(),
    ])}