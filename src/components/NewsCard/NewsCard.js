import React from "react";
import { Card, CardActionArea, CardMedia, CardActions, CardContent, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const NewsCard = ({ article: { title, source, description, url, urlToImage, publishedAt }, i }) => {
    let sampleImage = "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png";
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia 
                    image={urlToImage || sampleImage}
                    className={classes.media}
                />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={url}>Learn More</Button>
                <Typography variant="h5" color="textSecondary" component="p">{i+1}</Typography>
            </CardActions>
        </Card>
    );
};

export default NewsCard;