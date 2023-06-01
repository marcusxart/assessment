import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";
import PostDropdown from "./PostDropdown";

const Post = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="w-full p-[28px] rounded-[28px] bg-white min-h-[388px] flex">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="./img/highres-488961989-1@1x.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full px-6">
        <div className="flex items-center gap-[13px] w-full mb-[26px] relative">
          <img
            src="./img/ellipse-32-1@1x.png"
            className="w-[47px] h-[47px]"
            alt=""
          />
          <div
            className="absolute right-[-24px] top-[-8px] text-textGrey cursor-pointer"
            onClick={() => setIsToggle(!isToggle)}
          >
            <MoreHorizIcon fontSize="large" />
          </div>
          {isToggle && <PostDropdown />}
          <div className="">
            <p className="text-strongPurple text-xl">Rose kooto</p>
            <div className="flex gap-[15px] text-[8px]  bgPc:gap-[26px] bgPc:text-[11px] text-textGrey">
              <span>Abuja</span>
              <span>11hr ago</span>
              <span>200 Likes</span>
              <span className="font-semibold">20 Replies</span>
            </div>
          </div>
        </div>
        <p className="text-textGrey text-[13px] bgPc:text-[15px] mb-[11px]">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="text-textGrey px-[14px]">
          <p className="font-semibold text-[10px] mb-3">View all comments</p>
          <div className="w-full flex gap-[10px] mb-[22px]">
            <img
              src="./img/ellipse-32-1@1x.png"
              className="w-[29x] h-[29px]"
              alt=""
            />
            <div className="flex-1">
              <div className=" mb-1">
                <p className="text-strongPurple text-[16px] leading-[16px]">
                  Rose Kooto
                </p>
                <p className="text-[10px]">Last Seen 11hr</p>
              </div>
              <p className="text-[9px] bgPc:text-xs">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                Read more....
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex gap-[18px] items-center">
            <img
              src="./img/icon-awesome-heart-1@1x.png"
              alt=""
              className="w-[22px] object-contain cursor-pointer"
            />
            <img
              src="./img/icon-feather-message-circle-1@1x.png"
              alt=""
              className="w-[22px] object-contain cursor-pointer"
            />
            <img
              src="./img/icon-feather-bookmark-2@1x.png"
              alt=""
              className="w-[17px] object-contain cursor-pointer"
            />
          </div>
          <img
            src="./img/icon-ionic-md-share-alt-1@1x.png"
            alt=""
            className="w-[22px] object-contain cursor-pointer absolute z-10 right-[-24px] top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
