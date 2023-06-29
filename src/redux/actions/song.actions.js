
import {SELECT_SONGS} from './actionTypes';  


// action creator functions: 

export const selectSongs = (song) => {

    return{
         type: SELECT_SONGS,
         payload: song
    }
}