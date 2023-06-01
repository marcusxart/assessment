import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "../../../components/Button";
import { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";

const ProfileInfo = () => {
  const [isToggle, setIsToggle] = useState(false);
  const numberArray = [
    { value: "105", text: "Post" },
    { value: "7080", text: "Followers" },
    { value: "1,500", text: "Following" },
    { value: "1,500", text: "Suppoting" },
  ];
  return (
    <div className="bg-lightPurple relative rounded-[20px] mb-[34px]">
      {isToggle && (
        <div className="w-[130px] h-[88px] flex flex-col absolute z-10 rounded-xl bg-white right-[-66px] shadow-[0px_4px_8px_#00000021] top-[35px] text-[12px] text-[#490057]">
          <div className="flex flex-1 gap-[5px] items-center pl-[12px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
            <IosShareIcon />
            <p className="text-[12px]">Copy Link</p>
          </div>
          <div className="flex flex-1 gap-[11px] items-center px-[16px]">
            <img
              src="./img/icon-material-report@1x.png"
              alt=""
              className="w-[14px] h-[14px]"
            />
            <p>Report Post</p>
          </div>
        </div>
      )}
      <div
        className="text-[30px] absolute right-[12px]"
        onClick={() => setIsToggle(!isToggle)}
      >
        <MoreHorizIcon
          fontSize="inherit"
          htmlColor="#787878"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="pl-[30px] bgPc:pl-[48px] flex gap-[10%] bgPc:gap-[77px]  pr-[40px] ">
        <div className="flex gap-[20px] bgPc:gap-[37px] pt-5 pb-[14px]">
          <img
            src="./img/ellipse-267@1x.png"
            alt=""
            className="w-[100px] h-[100px] bgPc:w-[125px] bgPc:h-[125px] mt-[18px] "
          />
          <div className="w-full max-w-[309px] ">
            <p className="text-[30px] bgPc:text-[40px] text-strongPurple">
              Rose Kooto
            </p>
            <div className="text-textGrey">
              <p className="text-xl mb-2 bgPc:mb-4">User name</p>
              <p className="text-[13px] bgPc:text-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[34px]">
          <div className="mb-[28px]">
            <div className="flex gap-[14px] bgPc:gap-[35px] mb-[13px]">
              {numberArray.map((content, idx) => (
                <div key={idx}>
                  <p className="text-[14px] bgPc:text-[18px] text-strongPurple font-semibold leading-[20px]">
                    {content.value}
                  </p>
                  <p className="text-[#787878] text-[10px]">{content.text}</p>
                </div>
              ))}
            </div>
            <Button
              text="Following"
              style={{
                width: "119px",
                padding: "8.25px 20px 10px",
                borderRadius: "15px",
                height: "29px",
                fontSize: "10px",
              }}
            />
          </div>

          <div className="text-strongPurple text-[10px]">
            <p className="mb-1">Other Pages</p>
            <div className="">
              <p>Business One</p>
              <p>Business One longer name</p>
              <p>Business One</p>
              <p>Business One</p>
              <p>Business One</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
