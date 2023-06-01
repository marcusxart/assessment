import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import CreatePost from "./CreatePost";
import Post from "./Post";

const CenterSection = () => {
  const [toggleSection, setToggleSection] = useState<0 | 1 | 2>(0);
  const activeClass =
    "text-strongPurple  before:absolute before:left-0 before:right-0 before:h-[6px] before:bg-strongPurple before:bottom-[-18px]";
  return (
    <div className="pt-[73px] px-[40px] bgPc:pl-[67px] bgPc:pr-[56px] w-full">
      <div className="border-b border-solid border-[#707070] pb-[13px] w-full flex justify-between text mb-[37px]">
        <p
          className={`text-[14px] bgPc:text-[20px] cursor-pointer text-[#9B9B9B] relative px-[47px] ${
            toggleSection === 0 ? activeClass : ""
          }`}
          onClick={() => setToggleSection(0)}
        >
          Community
        </p>
        <p
          className={`text-[14px] bgPc:text-[20px] cursor-pointer text-[#9B9B9B] relative px-[47px] ${
            toggleSection === 1 ? activeClass : ""
          }`}
          onClick={() => setToggleSection(1)}
        >
          See What's Trending
        </p>
        <p
          className={`text-[14px] bgPc:text-[20px] cursor-pointer text-[#9B9B9B] relative px-[47px] ${
            toggleSection === 2 ? activeClass : ""
          }`}
          onClick={() => setToggleSection(2)}
        >
          My page
        </p>
      </div>
      <ProfileInfo />
      <CreatePost />
      <div className="w-full flex flex-col gap-9">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default CenterSection;
