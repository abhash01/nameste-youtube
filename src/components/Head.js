import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_AUTO } from "../utils/constant";

const Head = () => {
  const [searchquery, setSearchquery] = useState("");
  const [searchsuggestion, setSearchsuggestion] = useState([]);
  const [showsuggection, setShowsuggestion] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      autoSearchQuery();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make a API call after 200ms
   *
   * key -ip
   * - destroy the component (useEffect return method)
   * - useEffect()
   * - start timer => make a API call after 200ms
   */

  const autoSearchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_AUTO + searchquery);
    const json = await data.json();
    setSearchsuggestion(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 my-2">
        <img
          onClick={toggleMenuHandler}
          alt="burger"
          className="h-8"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABLS0vPz8+Wlpb29vZfX1+RkZHDw8M3Nzc0NDSCgoLU1NSkpKSFhYX8/Pzg4ODx8fF1dXUaGhqrq6vq6uq6uroXFxdmZmaxsbELCwtYWFgdHR2fn589PT3KyspxcXFEREQoKCh7e3tGlryJAAACdElEQVR4nO3d7VLCMBCF4QiUDxHLp4iIgN7/PWoHHfXPJm0ys7Pb97mCc6ZTStI0CQEAAAAAAAAAAAAAAAAA/Kunk/HAjvFkWrfqt/u4s+djl15woh22o0liv2qmnbSzWZVUcK+dM8M+peK9dsos9/GCc+2MmeaxgkvthNmWkYbP2gGzPcsFV9r5CliJDQ/a8Qo4iA3X2vEKWIsNbT8qbuQHxot2vAJexIba6YoQG2600xWwERseteMVcBQbWh03/SWPoR604xXwIDZ0cCO+ygXDQjtgtkWkofmLGLuE9u/EyF3Y2GpnzLKNFwzhpJ0ywymlYAhT7ZydTdMKhlDZHEStk+YSv+1Gb9p5W5qNWkx539TLoR3Ldm8tAAAAAAAAAACAKfV5MbJjcW7z3qnxNNB+l9Ta4KlFv+G7dtxO3s+pBR+1o3b2mFZwrJ0zwzil4EU7ZZZLvKD1ld7yKu8vlXbCbLHHht1fmR+RX5taO18B8qIFu4uFfsnLhqx/19WQv+26ascr4Co29PC9xV5sqJ2uiJ5fw6t2vALk+9DDb6n8yPf/PPT/n8b//9IejC38jw97MMbvwTyN5V+bxLm2HsyXBv9z3g3v7y0AAAAAAAAAAIAhzveJ8r7Xl9H92i7J75/sLhtK3HPP/b6J7ve+9L9/qfs9aP3vI2z9EkYv4lA7XwHyneh/T3b/++rbvw1jZyNopytCbOjhewv5jBL/58zYHDb9J58VZH2Vd0Ne6e3/zC7/56714Ow88992Rc8/tP7ASDjDsgfnkIbK2lTpr7SzZIPdMVTqecChB2c6h+ZzC9/ncgMAAAAAAAAAAAAAAACATZ8gAVacgh1jCwAAAABJRU5ErkJggg=="
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </div>
      <div className=" col-span-10 px-10">
        <div className="flex">
          <input
            className="w-1/2 p-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchquery}
            onChange={(e) => setSearchquery(e.target.value)}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
          />
          <button className="border py-2 px-2 border-gray-400 rounded-r-full">
            <img
              className="h-8"
              alt="logo"
              src="https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            />
          </button>
        </div>
        {showsuggection && (
          <div className="w-1/3 border-gray-400 rounded absolute bg-white">
            <ul>
              {searchsuggestion.map((s) => (
                <li key={s} className="shadow-lg hover:bg-gray-200 py-2 px-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 my-2">
        <img
          alt="login"
          className="h-8"
          src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
