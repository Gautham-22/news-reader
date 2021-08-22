import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from 'words-to-numbers';

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

let alanBtnInstance;
const App = () => {
    const classes = useStyles();
    const [newArticles,setNewArticles] = useState([]);
    const [currentArticle,setCurrentArticle] = useState(-1);

    // executed only once when the component mounts
    useEffect(() => {
        alanBtnInstance = alanBtn({
            key: process.env.REACT_APP_ALAN_SDK_KEY,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setCurrentArticle(-1);
                    setNewArticles(articles);
                } else if(command === 'highlight') {
                    setCurrentArticle((prev) => prev + 1);
                } else if(command === 'open') {
                    let num = number.length > 2 ? wordsToNumbers(number,{fuzzy: true}) : number;
                    if(num <= articles.length && articles[num - 1]) {
                        window.open(articles[num - 1].url,"_blank");
                        play('Opening...');
                    } else {
                        play('Sorry, there is no article on that number');
                    }
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

function play(text) {
    alanBtnInstance.playText(text);
}

export default App;