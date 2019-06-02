export function setInput(data) {
    return (dispatch, getState) => {
        dispatch({ type: "SEARCH", data: data });
    };
}

export function setVote(data) {
    return (dispatch, getState) => {
        dispatch({ type: "SEARCH", data: data });
        getState = () => { return { data: data } }
    };
}