import React from 'react';
import "./NewsCard.css";

const NewsCard = ({newsItem}) => {
       
    return (
      <div className="newsCard">
        <img
          alt={newsItem.message}
          src={
            newsItem.thumbnail
              ? newsItem.thumbnail
              : "https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
          }
          className="newsImage"
        />
        <div className="newsText">
          <p className="title">{newsItem.title}</p>
          <span className="description">{newsItem.message}</span>
          {
            newsItem.type === "milestone-subs" ?
            <>
              <span className="description">Total Subscribers: {newsItem.subscribers}</span>
              <span className="description">Estimated Subscribers (7 days): {newsItem.estimated_subscribers_7_days}</span>
              <span className="description">Estimated Subscribers (30 days): {newsItem.estimated_subscribers_30_days}</span>
            </>
            : newsItem.type === "trending-video" ?
            <>
              <span className="description">Channel Name: {newsItem.channel_title}</span>
            </>
            : newsItem.type === "delta-subs" ?
            <>
              <span className="description">Total Subscribers: {newsItem.subscribers}</span>
              <span className="description">Subscribers (30 days): {newsItem.subscribers_30_days}</span>
              <span className="description">Type of Change in Subscribers: {newsItem.change_type}</span>
              <span className="description">Percentage of Change in Subscribers (30 days): {newsItem.percent_change_30_day}</span>
            </>
            /*
            : newsItem.message === "\"Rim\" can be seen in 1.1% of the network's images uploaded to Instagram in the past week." ?
              newsItem.thumbnail = "https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
             */
            : <></>
          } 

        </div>
        <div className="contentTypeContainer">
        {
            newsItem.type === "milestone-subs" ?
            <>
              <span className="contentType">Milestone Subs</span>
            </>
            : newsItem.type === "trending-video" ?
            <>
              <span className="contentType">Trending Video</span>
            </>
            : newsItem.type === "stats-trend" ?
            <>
            <span className="contentType">Stats Trend</span>
            </>
            : newsItem.type === "channel-overlap" ?
            <>
              <span className="contentType">Channel Overlap</span>
            </>
            : newsItem.type === "delta-subs" ?
            <>
              <span className="contentType">Delta Subs</span>
            </>
            : newsItem.type === "video-objects" ?
            <>
              <span className="contentType">Video Objects</span>
            </>
            : newsItem.type === "video-topics" ?
            <>
              <span className="contentType">Video Topics</span>
            </>
            :
            <>
              <span className="contentType">New Channel</span>
            </>
          }
        </div>
      </div>
    );
  };

export default NewsCard;