import { ADD_ARTICLE, REMOVE_ARTICLE, FOUND_BAD_WORD, CHANGE_MAIN_TAB, CHANGE_SORTING_TYPE, CHANGE_LOGGED_USER } from "../constans/action-types";

export const addArticle =  payload => {
    return {type: ADD_ARTICLE, payload}
};

export const removeArticle =  payload => {
    return {type: REMOVE_ARTICLE, payload}
}

export const foundedBadWords = () => {
    return {type: FOUND_BAD_WORD}
}

export const changeMainTab = payload =>{
    return {type: CHANGE_MAIN_TAB, payload}
}

export const changeSortingType = payload => {
    return { type: CHANGE_SORTING_TYPE, payload}
}

export const changeLoggedUser = payload => {
    return { type: CHANGE_LOGGED_USER, payload }
}