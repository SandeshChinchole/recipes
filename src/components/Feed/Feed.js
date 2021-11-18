import React from "react";
import Container from '@mui/material/Container';
import Card from "../Card/Card";
import "./Feed.css";

const Feed = ({newsArray}) => {
    return(
        <Container maxWidth="lg">
            <div className="content">
                {newsArray.map((newsItem, i) => (
                    <Card newsItem={newsItem} key={newsItem.message} />
                ))}
            </div>
        </Container>
    );
};

export default Feed;