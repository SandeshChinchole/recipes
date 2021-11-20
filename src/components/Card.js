import React from 'react';

const Card = ({item}) => {
       
    return (
      <div className="newsCard">
        <img
          alt={item.message}
          src={
            item.thumbnail
              ? item.thumbnail
              : "https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
          }
          className="newsImage"
        />
        <div className="newsText">
          <p className="title">{item.title}</p>
          <span className="description">{item.message}</span>
          {
            item.type === "milestone-subs" ?
            <>
              <span className="description">Total Subscribers: {item.subscribers}</span>
              <span className="description">Estimated Subscribers (7 days): {item.estimated_subscribers_7_days}</span>
              <span className="description">Estimated Subscribers (30 days): {item.estimated_subscribers_30_days}</span>
            </>
            : item.type === "trending-video" ?
            <>
              <span className="description">Channel Name: {item.channel_title}</span>
            </>
            : item.type === "delta-subs" ?
            <>
              <span className="description">Total Subscribers: {item.subscribers}</span>
              <span className="description">Subscribers (30 days): {item.subscribers_30_days}</span>
              <span className="description">Type of Change in Subscribers: {item.change_type}</span>
              <span className="description">Percentage of Change in Subscribers (30 days): {item.percent_change_30_day}</span>
            </>
            /*
            : item.message === "\"Rim\" can be seen in 1.1% of the network's images uploaded to Instagram in the past week." ?
              item.thumbnail = "https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
             */
            : <></>
          } 

        </div>
        <div className="contentTypeContainer">
        {
            item.type === "milestone-subs" ?
            <>
              <span className="contentType">Milestone Subs</span>
            </>
            : item.type === "trending-video" ?
            <>
              <span className="contentType">Trending Video</span>
            </>
            : item.type === "stats-trend" ?
            <>
            <span className="contentType">Stats Trend</span>
            </>
            : item.type === "channel-overlap" ?
            <>
              <span className="contentType">Channel Overlap</span>
            </>
            : item.type === "delta-subs" ?
            <>
              <span className="contentType">Delta Subs</span>
            </>
            : item.type === "video-objects" ?
            <>
              <span className="contentType">Video Objects</span>
            </>
            : item.type === "video-topics" ?
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

export default Card;