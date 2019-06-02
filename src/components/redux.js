import { createStore } from 'redux';

class Redux {

    reducer(state, action) {
        switch (action.type) {
            case 'SEARCH':
                {
                    return action.inputValue
                }
            case 'VOTE':
                {
                    return action.voteItems
                }
            default:
                return state
        }
    }

    initialState = { inputValue: '', voteItems: [] };

}

export default Redux;