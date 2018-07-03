import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    phones: [],
    loading: null
};

const getPhonesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const getPhonesSuccess = ( state, action ) => {
    return updateObject( state, {
        phones: action.phones,
        goldPhone64GB:action.goldPhone64GB,
        goldPhone256GB:action.goldPhone256GB,
        silverPhone64GB:action.silverPhone64GB,
        silverPhone256GB:action.silverPhone256GB,
        spacegreyPhone64GB:action.spacegreyPhone64GB,
        spacegreyPhone256GB:action.spacegreyPhone256GB,
        loading: false
    } );
};

const getPhonesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PHONES_START: return getPhonesStart( state, action );
        case actionTypes.GET_PHONES_SUCCESS: return getPhonesSuccess( state, action );
        case actionTypes.GET_PHONES_FAIL: return getPhonesFail( state, action );
        default: return state;
    }
};

export default reducer;
