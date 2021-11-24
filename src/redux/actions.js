import { ADD_BALANCE, ADD_RESULTS, ADD_TO_CART, BUY_ITEM } from "./types";

export const addResults = (items) => {
    return {
        type: ADD_RESULTS,
        payload: items
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
};

export const addBalance = (count) => {
    return {
        type: ADD_BALANCE,
        payload: count
    }
};

export const buyItem = (item) => {
    return {
        type: BUY_ITEM,
        payload: item
    }
};
