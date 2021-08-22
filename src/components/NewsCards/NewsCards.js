import React, { useState, useEffect, createRef } from "react";
import { Grow, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles, currentArticle }) => {
    const classes = useStyles();
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from Wired' },
    ];
    const [elementRefs,setElementRefs] = useState([]);

    useEffect(() => {
        let newRefs = Array(articles.length).fill().map((_,i) => elementRefs[i] || createRef());
        setElementRefs(newRefs);
    },[articles]);

    if(!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard,i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3} className={classes.card}>
                            <div className={classes.infoCard} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5" component="h5" className={classes.title}>{infoCard.title}</Typography>
                                {infoCard.info && (
                                    <Typography variant="h6" component="h6" className={classes.info}>
                                        <strong>{infoCard.title.split(' ')[2]}: </strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>
                                )}
                                <Typography variant="h6" component="h6" className={classes.text}>
                                    Try saying:
                                    <br />    
                                    <i>{infoCard.text}</i>
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <>
            <Typography variant="body2" className={classes.commands}><b>Try saying:</b> go back | open article number 1</Typography>
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {articles.map((article,i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3} style={{display: "flex"}} ref={elementRefs[i]}>
                            <NewsCard article={article} i={i} currentArticle={currentArticle} refProp={elementRefs[i]} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </>
    );
};

export default NewsCards;