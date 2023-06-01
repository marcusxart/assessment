import { useState } from "react";
import Button from "../../../components/Button";

const Item = () => {
  return (
    <div className="flex w-full items-center gap-[13px] ">
      <img
        src="./img/ellipse-32-1@1x.png"
        alt=""
        className="w-[47px] h-[47px]"
      />
      <div className="flex flex-1 items-center gap-[10px] bgPc:gap-[18px]">
        <div className="flex items-center flex-1 justify-between">
          <div>
            <p className="text-[12px] text-strongPurple font-semibold">
              Rose Kooto
            </p>
            <p className="text-textGrey text-xs">Abuja</p>
          </div>
          <Button
            text="Support"
            style={{
              fontSize: "12px",
              width: "78px",
              height: "27px",
              borderRadius: "13px",
            }}
          />
        </div>
        <img
          src="./img/icon-feather-bookmark-1@1x.png"
          className="w-[11px] h-[14px]"
          alt=""
        />
      </div>
    </div>
  );
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
      <div className="w-full flex flex-col pt-[23px] px-[25px] pb-[34px] bg-lightPurple rounded-2xl gap-5">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default SuggestedUsersOrPages;
