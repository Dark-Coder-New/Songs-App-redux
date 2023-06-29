import {SELECT_SONGS} from '../actions/actionTypes'; 


const INITIAL_STATE = null 


const songsReducer = (state = INITIAL_STATE, action) => {
        switch(action.type){
            case SELECT_SONGS:
                return action.payload
            default:
                return state
        }
}

export default songsReducer;


