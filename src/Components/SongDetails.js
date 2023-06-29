
import React from 'react';
import { useSelector } from "react-redux";

const SongDetails = () => {

    let selectedSong = useSelector((state) => state.selectedSong);

    console.log(selectedSong);


    return(
        <div>
            <h1>Song Details</h1>
            {
                selectedSong && (
                    <div>
                        <h3>{selectedSong.name}</h3>
                        <h3>{selectedSong.duration}</h3>
                        <h3>{selectedSong.author}</h3>
                        <h3>{selectedSong.genere}</h3>
                        <h3>{selectedSong.album}</h3>

                    </div>
                )
            }
        </div>
    )
}

export default SongDetails;