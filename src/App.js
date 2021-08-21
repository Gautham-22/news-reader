import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const App = () => {
    const classes = useStyles();
    const [newArticles,setNewArticles] = useState([]);
    const [currentArticle,setCurrentArticle] = useState(-1);

    // executed only once when the component mounts
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_SDK_KEY,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setCurrentArticle(-1);
                    setNewArticles(articles);
                } else if(command === 'highlight') {
                    setCurrentArticle((prev) => prev + 1);
                }
            }
        });
    },[]);

    return (
        <div>
            <div className={classes.imageContainer}>
                <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" alt="Alan Logo" className={classes.image} />
            </div>
            <NewsCards articles={newArticles} currentArticle={currentArticle} />
        </div>
    );
};

export default App;