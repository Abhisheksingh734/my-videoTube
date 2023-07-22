import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // debouncing
  useEffect(() => {
    // make API call when searchquery changes
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API CALL-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex w-full p-4 justify-between md:flex md:justify-between items-center shadow-lg ">
      {/* Mobile Menu Icon */}
      <div className="flex items-center md:w-6/12 md:justify-between ">
        <div className="flex md:items-center">
          <img
            onClick={() => {
              toggleMenuHandler();
            }}
            className="h-7 -mx-1 block  sm:block cursor-pointer"
            alt="menu"
            src="https://img.icons8.com/?size=512&id=59832&format=png"
          />

          {/* Logo */}
          <a href="/">
            <img
              className="h-8 mx-3 md:mx-5 md:hidden"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
              alt="logo"
            />
            <img
              className="hidden md:block md:h-12 md:mx-5"
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />
          </a>
          {/* Search Box */}
        </div>
        <div className="relative flex  md:flex-col items-center md:w-1/2">
          <input
            className="border border-gray-200 rounded-2xl md:rounded-l-full pl-2 md:py-2 md:px-6  py-1 w-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value.toLowerCase());
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="absolute md:-my-[1px] md:-mr-5 right-0 mr-2 md:px-4 md:py-[10px] md:bg-gray-200 md:rounded-r-full">
            🔍
          </button>
          {/* Suggestions */}
          {showSuggestions && (
            <div className="absolute bg-white pl-2 pr-7 rounded-md mt-2 md:mt-12  w-full ">
              <ul>
                {suggestion.map((words, index) => {
                  return (
                    <li
                      key={index}
                      className="py-2 md:px-5  md:border-b-[1px] rounded"
                    >
                      {words}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* User Icon */}
      <img
        className="h-8 md:h-10 mr-1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZHZkZFOA8sW0MCEom45CGwmnJdl-RsK5n6-vEbSyqcYBvLBwkLTaYB8gjBXAO9ABhVs&usqp=CAU"
        alt="user-icon"
      />
    </div>
  );
};

export default Head;
