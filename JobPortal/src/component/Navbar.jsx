import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { logoutSuccess } from "../features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { username, userProfilePic } = useSelector((state) => state.auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-20 flex items-center justify-between w-full text-white flex-shrink-0 px-4 md:px-10 lg:px-20">
      {/* Brand Name */}
      <div className="text-xl md:text-2xl lg:text-3xl font-bold">
        JobSphere
      </div>

      {/* User Profile Section */}
      <div className="hidden md:flex items-center gap-2 justify-center flex-shrink-0">
  {username ? (
    <>
      <img
        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        src={userProfilePic || "defaultProfilePicUrl.jpg"}
        alt={`${username}'s profile`}
      />
      <label className="text-sm md:text-lg lg:text-2xl font-semibold whitespace-nowrap">
        {username}
      </label>
    </>
  ) : (
    <label className="text-sm md:text-lg lg:text-xl font-semibold">Guest</label>
  )}
</div>


      {/* Logout Button */}
      <div className="pt-3 flex-shrink-0">
        <button
          onClick={handleLogout}
          className="bg-white w-24 md:w-28 lg:w-32 rounded-2xl h-10 md:h-12 lg:h-14 relative text-black text-sm md:text-lg lg:text-xl font-semibold group"
          type="button"
        >
          <div className="bg-gray-400 rounded-xl h-8 md:h-10 lg:h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 md:top-[4px] lg:top-[4px] group-hover:w-[118px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="20px"
              width="20px"
              className="md:h-6 md:w-6 lg:h-8 lg:w-8"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p className="translate-x-1 md:translate-x-2">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
