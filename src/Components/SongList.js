
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {selectSongs} from "../redux/actions/song.actions";

const SongList = () => {

   let data = useSelector((state) => state.data);
    
//    console.log(data);

  const dispatch = useDispatch();

    return(
        <div>
            <h1>Song List</h1>
            <div style={{
                        border: "1px solid black",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}>
            {
                data.map((song, index) => (
                    <div key={index}  style={{width:"200px"}}
                      onClick = {()=> dispatch(selectSongs(song))}
                    >
                        <h3>{song.name}</h3>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default SongList;