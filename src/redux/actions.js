export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET_FAV = 'RESET_FAV'

export const addFavorite = (character) => {
    return{
        type: ADD_FAV,
        payload: character
    }
}

export const removeFavorite = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: ORDER,
        payload: order
    }
}

export const resetFavorites = () => {
    return{
        type: RESET_FAV,
    }
}