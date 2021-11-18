import React from "react";
import Container from '@mui/material/Container';
import NewsCard from "../NewCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({newsArray, newsResults}) => {
    return(
        <Container maxWidth="lg">
            <div className="content">
                {newsArray.map((newsItem, i) => (
                    <NewsCard newsItem={newsItem} key={newsItem.message} />
                ))}
            </div>
        </Container>
    );
};

export default NewsContent;