import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoURL = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full ">
      <div className="w-full mt-24 px-5 grid grid-flow-col ">
        <div className="flex col-span-8">
          <iframe
            className="w-full"
            // width="1200"
            // height="600"
            src={"https://www.youtube.com/embed/" + videoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative w-full flex col-span-4">
          <LiveChat />
        </div>
      </div>
      <div className="w-1/2">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
