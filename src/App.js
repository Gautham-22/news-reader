import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const App = () => {
    const [newArticles,setNewArticles] = useState([]);

    // executed only once when the component mounts
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_SDK_KEY,
            onCommand: ({ command, articles }) => {
                if(command === 'newsFromSource') {
                    setNewArticles(articles);
                }
            }
        });
    },[]);

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Alan AI News Reader</h1>
            <NewsCards articles={newArticles} />
        </div>
    );
};

export default App;