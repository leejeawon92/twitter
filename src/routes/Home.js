import Tweet from 'components/Tweet';
import { dbService, storageService  } from 'fbase';
import React, { useEffect, useState } from 'react';
import TweetFactory from "components/TweetFactory";

const Home = ({userObj}) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArray);
        });
    }, []);

    return (
        <div>
            <TweetFactory userObj={userObj}></TweetFactory>
            <div>
                {nweets.map((nweet) => (
                    <Tweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={nweet.creatorId === userObj.uid}
                    ></Tweet>
                ))}
            </div>
        </div>
    );
};
export default Home