import { useState } from "react";

const Item = () => {
  return <div></div>;
};

const SuggestedUsersOrPages = () => {
  const [toggleSection, setToggleSection] = useState<0 | 1>(0);
  const activeClass =
    "text-strongPurple  before:absolute before:left-0 before:right-0 before:h-[5px] before:bg-strongPurple before:bottom-[-13px]";
  return (
    <div className="w-full ">
      <div className="flex w-full border-b border-solid border-[#707070] pb-[7.5px] justify-between text-[15px] text-[#9B9B9B] mb-[29px]">
        <p
          className={` cursor-pointer pr-[15px] relative ${
            toggleSection === 0 && activeClass
          }`}
          onClick={() => setToggleSection(0)}
        >
          Suggested Users
        </p>
        <p
          className={` cursor-pointer px-[15px] relative ${
            toggleSection === 1 && activeClass
          }`}
          onClick={() => setToggleSection(1)}
        >
          Suggested Pages
        </p>
      </div>
      <div className="w-full flex flex-col pt-[23px] px-[25px] pb-[34px] bg-lightPurple rounded-2xl">
        <Item />
      </div>
    </div>
  );
};

export default SuggestedUsersOrPages;
