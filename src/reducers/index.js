import { ADD_ARTICLE, REMOVE_ARTICLE, FOUND_BAD_WORD } from "../constans/action-types";

const initialState = {
    articles: []
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
    return state;
}

export default rootReducer;