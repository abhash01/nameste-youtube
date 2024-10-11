import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);

  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className=" ">
      <div className="w-72 shadow-lg m-2 h-80">
        <img className=" rounded-lg" alt="videos" src={thumbnails.medium.url} />
        <p className="font-bold p-2">{title}</p>
        <p className="font-light p-2">{channelTitle}</p>
        <p className="p-2">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
