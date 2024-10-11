import React from "react";
import ButtonList from "./ButtonList";
import VideoContiner from "./VideoContiner";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoContiner />
    </div>
  );
};

export default MainContainer;
