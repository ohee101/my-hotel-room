import * as actionTypes from './actionTypes';

const DECORATION_PRICES = {
    single: 2000,
    double: 4000,
    suite: 9000,
}

const INITIAL_STATE = {
    ingredients: [
        { type: 'single', amount: 0 },
        { type: 'double', amount: 0 },
        { type: 'suite', amount: 0 },
    ],
    books: [],
    bookLoading: true,
    bookErr: false,
    totalPrice: 15000,
    purchasable: false,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    const decorations = [...state.ingredients];
    switch (action.type) {
        case actionTypes.ADD_DECORATION:
            for (let item of decorations) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                decorations: decorations,
                totalPrice: state.totalPrice + DECORATION_PRICES[action.payload],
            }
        case actionTypes.REMOVE_DECORATION:
            for (let item of decorations) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                }
            }
            return {
                ...state,
                decorations: decorations,
                totalPrice: state.totalPrice - DECORATION_PRICES[action.payload],
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.decorations.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchasable: sum > 0,
            }
        case actionTypes.RESET_DECORATIONS:
            return {
                ...state,
                decorations: [
                    { type: 'single', amount: 0 },
                    { type: 'double', amount: 0 },
                    { type: 'suite', amount: 0 },
                ],
                totalPrice: 15000,
                purchasable: false,
            }
        case actionTypes.LOAD_BOOKS:
            let books = [];
            for (let key in action.payload) {
                books.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                books: books,
                bookLoading: false,
            }
        case actionTypes.ORDER_LOAD_FAILED:
            return {
                ...state,
                bookErr: true,
                bookLoading: false,
            }

        //Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }

        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload,
            }
        default:
            return state;
    }

}