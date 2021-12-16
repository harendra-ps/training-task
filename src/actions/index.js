
import {GET_PRODUCT_LIST, ERROR_IN_PRODUCT_LIST } from './constant';
import axios from 'axios';



//Get product list
export const getProductList = (reqPayload = "") => async dispatch => {
    dispatch({type: 'Loading true' });
    if(reqPayload) {
        try {
            const res = await axios.get(`https://www.coach.com/shop/new/view-all?srule=featured&page=${reqPayload.pageNo}&start=${reqPayload.startFrom}&fmt=headlessjson`);
            dispatch({
                type: GET_PRODUCT_LIST,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: ERROR_IN_PRODUCT_LIST,
                payload: err
            })
        }
    }
}

