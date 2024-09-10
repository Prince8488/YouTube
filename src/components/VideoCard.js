import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div>
      <div className="relative bottom-0 left-56 z-0 max-sm:left-0">
        <div className="shadow-lg w-96 h-94 rounded-t-3xl mr-2 mb-5 ml-5 max-sm:w-full max-sm:ml-0 max-sm:rounded-none">
          <div>
            <img
              className="w-96 h-60 rounded-3xl max-sm:rounded-none"
              src={thumbnails.high.url}
              alt="thumbnail"
            />
          </div>
          <div className="p-4 py-2 font-bold text-sm">
            <h4 className="text-black dark:text-white">{title}</h4>
            <h5 className="py-1 text-gray-400">{channelTitle}</h5>
            <h6 className="text-gray-400 flex ">
              {statistics.viewCount}{" "}
              <span className="font-extrabold px-2">.</span>
              {publishedAt}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
