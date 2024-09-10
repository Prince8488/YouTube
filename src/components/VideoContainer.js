import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos) return;
  return (
    <div className="relative flex flex-wrap justify-start mt-40">
      {videos.map((item) => (
        <VideoCard key={item.snippet.title} info={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
