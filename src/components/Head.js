import { useDispatch, useSelector } from "react-redux";
import { toggelTheme, toggleMenu } from "../utils/appSlice";
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
    console.log(json);

    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // dispatching an action for dark theme
  const toggleThemeHandler = () => {
    dispatch(toggelTheme());
  };

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div
      className={
        "flex w-full p-4 justify-between md:flex md:justify-between items-center shadow-lg " +
        (isDarkTheme && "bg-gray-800 ")
      }
    >
      {/* Mobile Menu Icon */}
      <div className="flex items-center md:w-6/12 md:justify-between ">
        <div className="flex md:items-center">
          {/* <img
            className="h-7 -mx-1 block  sm:block cursor-pointer"
            alt="menu"
            src="https://img.icons8.com/?size=512&id=59832&format=png"
          /> */}
          <button>
            <i
              className={
                "text-[25px] -mx-1 block  sm:block cursor-pointer fa-solid fa-bars " +
                (isDarkTheme && "text-white")
              }
              onClick={() => {
                toggleMenuHandler();
              }}
            ></i>
          </button>

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
        <div
          className={
            "relative flex  md:flex-col items-center md:w-1/2 " +
            (isDarkTheme && "text-black")
          }
        >
          <input
            className={
              "border border-gray-200 rounded-2xl md:rounded-l-full pl-2 md:py-2 md:px-6  py-1 w-full " +
              (isDarkTheme && "bg-gray-800 text-white border-black")
            }
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value.toLowerCase());
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className={
              "absolute md:-my-[1px] md:-mr-5 right-0 mr-2 md:px-4 md:py-[10px] md:bg-gray-200 md:rounded-r-full " +
              (isDarkTheme && "md:bg-gray-600")
            }
          >
            <i
              className={
                "fa-solid fa-magnifying-glass " + (isDarkTheme && "text-white")
              }
            ></i>
          </button>
          {/* Suggestions */}
          {console.log(isDarkTheme)}
          {showSuggestions && (
            <div
              className={
                "absolute bg-white pl-2 pr-7 rounded-md mt-2 md:mt-12  w-full " +
                (isDarkTheme && " text-white bg-slate-700")
              }
            >
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
      <div className="hidden md:block">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onClick={() => {
              toggleThemeHandler();

              console.log("theme changed");
            }}
            value=""
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span
            className={
              "ml-3 text-sm font-medium " + (isDarkTheme && "text-white")
            }
          >
            Dark/Light Mode
          </span>
        </label>
      </div>

      {/* User Icon */}
      <i
        className={
          "fa-solid fa-user text-[35px] text-black hover:text-amber-400 " +
          (isDarkTheme && "text-white ")
        }
      ></i>
    </div>
  );
};

export default Head;
