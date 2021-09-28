import { REQUEST_SUCCESS } from "../actions";

const INITIAL_STATE = {
  data: [],
}

const apisReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state;
  }
}

export default apisReducer;
