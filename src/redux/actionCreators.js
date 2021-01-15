import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addDecoration = igtype => {
    return {
        type: actionTypes.ADD_DECORATION,
        payload: igtype,
    }
}

export const removeDecoration = igtype => {
    return {
        type: actionTypes.REMOVE_DECORATION,
        payload: igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetDecorations = () => {
    return {
        type: actionTypes.RESET_DECORATIONS,
    }
}


export const loadBooks = books => {
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}

export const bookLoadFailed = () => {
    return {
        type: actionTypes.BOOK_LOAD_FAILED,
    }
}

