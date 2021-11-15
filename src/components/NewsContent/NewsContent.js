import React from "react";
import Container from '@mui/material/Container';
import NewsCard from "../NewCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
    return(
        <Container maxWidth="lg">
            <div className="content">
                {newsArray.map((newsItem, i) => (
                    <NewsCard newsItem={newsItem} key={newsItem.message} />
                ))}
                {loadMore <= newsResults && (
                <>
                    <hr />
                    <button
                    className="loadMore"
                    onClick={() => setLoadMore(loadMore + 5)}
                    >
                    Load More
                    </button>
                </>
                )}
            </div>
        </Container>
    );
};

export default NewsContent;