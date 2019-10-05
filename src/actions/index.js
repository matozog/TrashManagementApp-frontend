import { CHANGE_MAIN_TAB, CHANGE_SORTING_TYPE, CHANGE_LOGGED_USER } from "../constans/action-types";

export const changeMainTab = payload =>{
    return {type: CHANGE_MAIN_TAB, payload}
}

export const changeSortingType = payload => {
    return { type: CHANGE_SORTING_TYPE, payload}
}

export const changeLoggedUser = payload => {
    return { type: CHANGE_LOGGED_USER, payload }
}