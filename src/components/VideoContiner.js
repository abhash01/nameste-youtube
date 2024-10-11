import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContiner = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((videos) => (
        <VideoCard key={videos.id} info={videos} />
      ))}
    </div>
  );
};

export default VideoContiner;
