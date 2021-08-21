import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const App = () => {
    const classes = useStyles();
    const [newArticles,setNewArticles] = useState([]);

    // executed only once when the component mounts
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_SDK_KEY,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewArticles(articles);
                }
            }
        });
    },[]);

    return (
        <div>
            <div className={classes.imageContainer}>
                <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" alt="Alan Logo" className={classes.image} />
            </div>
            <NewsCards articles={newArticles} />
        </div>
    );
};

export default App;