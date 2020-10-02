import { ADD_ADDITIONAL_FEATURES, REMOVE_ADDITIONAL_FEATURES } from '../reducers/carSalesReducer';

export const removeFeature = item => {

    return { type: REMOVE_ADDITIONAL_FEATURES, payload: item }
};

export const buyItem = item => {

    return { type: ADD_ADDITIONAL_FEATURES, payload: item }
};

