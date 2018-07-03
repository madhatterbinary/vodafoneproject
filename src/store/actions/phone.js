import * as actionTypes from './actionTypes';
import axios from '../../axios-phones';

export const getPhonesSuccess = ( phones ) => {

    let phoneObj = Object.keys(phones[0]).map(k => {
        return phones[0][k];
    });
   //  Apple iPhone 8 64GB Gold
   let goldPhone64GB = phoneObj.filter((obj)=>{
      return obj.colourName === "Gold" && obj.memory === "64GB" ;
   });
   //  Apple iPhone 8 256GB Gold
   let goldPhone256GB = phoneObj.filter((obj)=>{
        return obj.colourName === "Gold" && obj.memory === "256GB" ;
   });
   //  Apple iPhone 8 64GB Silver
    let silverPhone64GB = phoneObj.filter((obj)=>{
        return obj.colourName === "Silver" && obj.memory === "64GB" ;
   });
   //  Apple iPhone 8 256GB Silver
   let silverPhone256GB = phoneObj.filter((obj)=>{
    return obj.colourName === "Silver" && obj.memory === "256GB" ;
   });
   //  Apple iPhone 8 64GB Space Grey
    let spacegreyPhone64GB = phoneObj.filter((obj)=>{
        return obj.colourName === "Space Grey" && obj.memory === "64GB" ;
    });
   //  Apple iPhone 8 256GB Space Grey
    let spacegreyPhone256GB = phoneObj.filter((obj)=>{
    return obj.colourName === "Space Grey" && obj.memory === "256GB" ;
    });
    return {
        type: actionTypes.GET_PHONES_SUCCESS,
        phones: phones,
        goldPhone64GB:goldPhone64GB,
        goldPhone256GB:goldPhone256GB,
        silverPhone64GB:silverPhone64GB,
        silverPhone256GB:silverPhone256GB,
        spacegreyPhone64GB:spacegreyPhone64GB,
        spacegreyPhone256GB:spacegreyPhone256GB
    };
};

export const getPhonesFail = ( error ) => {
    return {
        type: actionTypes.GET_PHONES_FAIL,
        error: error
    };
};

export const getPhonesStart = () => {
    return {
        type: actionTypes.GET_PHONES_START
    };
};

export const getPhones = (token, userId) => {
    return dispatch => {
        dispatch(getPhonesStart());
        axios.get( '/0.json')
            .then( res => {
                const fetchedPhones = [];
                for ( let key in res.data ) {
                    fetchedPhones.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(getPhonesSuccess(fetchedPhones));
            } )
            .catch( err => {
                dispatch(getPhonesFail(err));
            } );
    };
};
