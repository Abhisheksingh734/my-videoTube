import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow ">
      <div className="flex col-span-1">
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
      <div className="col-span-10 text-center">
        <input
          placeholder="Search"
          className=" border border-black w-1/2 p-2 px-4 my-3 rounded-l-3xl"
          type="text"
        />
        <button className="  bg-gray-200 p-2 px-4 rounded-r-3xl hover:bg-gray-300">
          🔍
        </button>
      </div>
      <div className="flex justify-end">
        <img
          className="h-10 col-span-1 my-2 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZHZkZFOA8sW0MCEom45CGwmnJdl-RsK5n6-vEbSyqcYBvLBwkLTaYB8gjBXAO9ABhVs&usqp=CAU"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
