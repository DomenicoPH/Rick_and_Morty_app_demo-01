import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET_FAV } from "./actions"

let filteredCopy;

const initialState = {
    favorites: [],
    filtered: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
                filtered: [...state.filtered, action.payload],
            }
        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(char => char.id !== Number(action.payload)),
                filtered: state.filtered.filter(char => char.id !== Number(action.payload)),
            }
        case FILTER:
            if(action.payload === 'All'){
                return {
                    ...state,
                    filtered: state.favorites
                }
            } else {
                return {
                    ...state,
                    filtered: state.favorites.filter((char) => char.gender === action.payload)
                }
            }
        case ORDER:
            if(action.payload === 'U'){
                return {
                    ...state,
                    filtered: state.favorites
                }
            } else {
                filteredCopy = [...state.filtered]
                return {
                    ...state,
                    filtered: action.payload === 'A'
                    ? filteredCopy.sort((a, b) => a.id - b.id)
                    : filteredCopy.sort((a, b) => b.id - a.id)
            }
            }
        case RESET_FAV:
            return {
                ...state,
                filtered: state.favorites
            }
            
        default:
            return { ...state }
    }
}

export default rootReducer;