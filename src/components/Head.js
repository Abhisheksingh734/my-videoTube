import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //debouncing
  useEffect(() => {
    //make API call when searchquery changes
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key- i
   *  - render the component
   *  - call the useEffect()
   *  - start timer => make api call after 200ms
   *
   * key- ip
   *  - destroy the component(useEffect return method called)
   *  - re-render the component
   *  - useEffect()
   *  - start timer => make api call after 200ms
   *
   */

  const getSearchSuggestion = async () => {
    console.log("API CALL-" + searchQuery);
    const ytSearchApi = process.env.REACT_APP_YOUTUBE_SEARCH_URL;
    const data = await fetch(ytSearchApi + searchQuery);
    const json = await data.json();

    setSuggestion(json[1]);
    // console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow ">
      <div className="flex col-span-3">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-7  mx-4 my-5 cursor-pointer"
          alt="menu"
          src="https://img.icons8.com/?size=512&id=59832&format=png"
        />
        <a href="/">
          <img
            className="h-12 m-2 "
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-8 ">
        <div>
          <input
            placeholder="Search"
            className=" border border-black w-1/2 p-2 px-6  my-3 rounded-l-3xl"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="  bg-gray-200 p-2 px-4 rounded-r-3xl hover:bg-gray-300">
            🔍
          </button>
        </div>
        <div className="absolute bg-white  w-[38rem] rounded-xl shadow-xl border border-gray-100">
          <ul>
            {suggestion.map((words, index) => {
              return (
                showSuggestions && (
                  <li
                    key={index}
                    className="py-2 px-6 hover:bg-gray-100 shadow-sm"
                  >
                    {words}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-end col-span-1">
        <img
          className="h-10  my-2 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZHZkZFOA8sW0MCEom45CGwmnJdl-RsK5n6-vEbSyqcYBvLBwkLTaYB8gjBXAO9ABhVs&usqp=CAU"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
