import * as api from '../services/api'

export default {
  namespace: 'travel',
  state: {
    list: null,
  },
  reducers: {
    SET_data(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    }
  },
  effects: {
    * GET_search({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.get_opendata);
        // console.log(data)
        yield put({
          type: 'SET_data',
          payload: data,
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}