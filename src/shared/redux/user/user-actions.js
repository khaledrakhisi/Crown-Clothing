import userActiontypes from "./user-types";

export const setCurrentUser = user => {
    return {
        type: userActiontypes.SET_CURRENT_USER,
        payload: user,
    }
}