import { ADD_ARTICLE, REMOVE_ARTICLE, FOUND_BAD_WORD } from "../constans/action-types";

export const addArticle =  payload => {
    return {type: ADD_ARTICLE, payload}
};

export const removeArticle =  payload => {
    return {type: REMOVE_ARTICLE, payload}
}

export const foundedBadWords = () => {
    return {type: FOUND_BAD_WORD}
}
