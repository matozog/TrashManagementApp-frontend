import { ADD_ARTICLE, REMOVE_ARTICLE, FOUND_BAD_WORD, CHANGE_MAIN_TAB } from "../constans/action-types";

const initialState = {
    articles: [],
    mainTabs:{
        choosenTab: "#schedule"
    }
};

function rootReducer (state = initialState, action) {
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }else if(action.type === REMOVE_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    else if(action.type === FOUND_BAD_WORD){
        console.log("Some error");
    }
    else if(action.type === CHANGE_MAIN_TAB){
        return {
            ...state,
            mainTabs:{
                choosenTab: action.payload
            }
        }
    }
    return state;
}

export default rootReducer;