import { ADD_ARTICLE } from "./constans/action-types";
import {foundedBadWords} from './actions/index'
const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          console.log("BAD_WORD")
          return dispatch(foundedBadWords())
        }
      }
      return next(action);
    };
  };
}