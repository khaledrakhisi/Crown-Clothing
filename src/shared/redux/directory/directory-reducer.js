import SECTIONS_DATA from "../../data/sectionsdata";

const INITIAL_STATE = {
    sections: [...SECTIONS_DATA],
};

console.log(INITIAL_STATE);

const directoryReducer = (currentState = INITIAL_STATE, action) => {

    switch (action.type){
        
        default :
            return currentState;
    }
}

export default directoryReducer;