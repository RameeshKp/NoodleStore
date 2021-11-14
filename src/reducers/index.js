import {GET_LIST, GET_IMAGES, SET_LOADER, UPDATE_LIST} from '../actions/type';
const initialState = {
  itemsList: [],
  imageArray: [],
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, itemsList: action.payload};
    case GET_IMAGES:
      return {...state, imageArray: action.payload};
    case SET_LOADER:
      return {...state, isLoading: action.payload};
    case UPDATE_LIST:
        return {...state, itemsList: action.payload};
    default:
      return state;
  }
};
