import dataReducer from "./reducer/dataReducer";
import songsReducer from "./reducer/songsReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    data : dataReducer,
    selectedSong : songsReducer
})


const store = createStore(rootReducer);

// store , createContext()

export default store;
