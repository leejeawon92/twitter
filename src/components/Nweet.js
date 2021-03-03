import React, { useState } from "react";
import { dbService } from "fbase";

const Nweet = ({nweetObj, isOwner}) => {
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    };
    return(
        <div key={nweetObj.id}>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )}
        </div>
    )
}

export default Nweet;