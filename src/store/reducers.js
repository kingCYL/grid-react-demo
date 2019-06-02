import { combineReducers } from "redux";
import defaultState from "./state.js";

function search(state = defaultState.inputValue, action) {
    switch (action.type) {
        case "SEARCH":
            return action.data;
        default:
            return state;
    }
}

function setVote(state = defaultState.votes, action) {
    switch (action.type) {
        case "VOTE_CLICK":
            return action.data;
        default:
            return state;
    }
}

// 导出所有reducer
export default combineReducers({
    search,
    setVote
});