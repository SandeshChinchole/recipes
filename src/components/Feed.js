import React from "react";
import Grid from '@mui/material/Grid';
import Card from "./Card";

const Feed = ({news}) => {
    return(
        /*
        <Container maxWidth="lg">
            <div className="content">
                {newsArray.map((newsItem, i) => (
                    <Card newsItem={newsItem} key={newsItem.message} />
                ))}
            </div>
        </Container>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {newsArray.map((newsItem, i) => (
                <Grid item xs={3} sm={4} md={4}>
                    <Card newsItem={newsItem} key={newsItem.message} />
                </Grid>
            ))}
        </Grid>
        */
        <Grid container spacing={1}>
        {news.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i}>
                    <Card item={item} key={item.message} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Feed;