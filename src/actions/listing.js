import axios from 'axios';
import { GET_LIST, GET_IMAGES, SET_LOADER,UPDATE_LIST } from './type'
export const toggleLoader = (info) => (
    {
        type: SET_LOADER,
        payload: info
    }
)
export const getItems = () => {
    return async function (dispatch) {
        try {
            dispatch(toggleLoader(true));
            var config = {
                method: 'get',
                url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`,
                headers: {
                    'Accept': 'application/json',
                },
            };
            const response = await axios(config)
            dispatch(toggleLoader(false));
            dispatch({
                type: GET_LIST,
                payload: response.data
            })
        } catch (e) {
            dispatch(toggleLoader(false));
        }
    }
}
export const getImages = () => {
    return async function (dispatch) {
        try {
            var config = {
                method: 'get',
                url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`,
                headers: {
                    'Accept': 'application/json',
                },
            };
            const response = await axios(config)
            dispatch({
                type: GET_IMAGES,
                payload: response.data
            })
        } catch (e) {
        }
    }
}
export const sort = (info) => {
    return {
        type: UPDATE_LIST,
        payload: info,
    };
};