import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
interface ItemProps {
  value: string;
  toggle?: () => void;
  isToggle?: string | number | null;
  id?: string | number;
}

const Item = ({ value, toggle, isToggle, id }: ItemProps) => {
  return (
    <div className="px-5 py-[5px] bg-bgColor flex w-[260px] justify-between relative ">
      {isToggle === id && (
        <div className="w-[108px] h-[62px] flex flex-col absolute z-10 rounded-lg bg-white right-[-66px] shadow-[0px_4px_8px_#00000021] top-[22px] text-[15px] text-[#490057]">
          <div className="flex flex-1 gap-[7px] items-center px-2 border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
            <img
              src="./img/icon-metro-pin-4@1x.png"
              alt=""
              className="w-[10px] h-[15px]"
            />
            <p>Pin</p>
          </div>
          <div className="flex flex-1 gap-[7px] items-center px-2">
            <img
              src="./img/icon-material-edit@1x.png"
              alt=""
              className="w-3 h-3"
            />
            <p>Edit Page</p>
          </div>
        </div>
      )}
      <div className="flex gap-[11px] w-full">
        <img
          src="./img/ellipse-95-1@1x.png"
          alt=""
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <p className="text-strongPurple text-[15px]">Business name</p>
          <p className="text-[#9B9B9B] text-[10px]">{value}</p>
        </div>
      </div>
      <div className="flex flex-col relative">
        <div
          className="inline-block absolute top-[-5px] right-0 text-[20px]"
          onClick={toggle}
        >
          <MoreHorizIcon
            fontSize="inherit"
            htmlColor="#787878"
            style={{ cursor: "pointer" }}
          />
        </div>
        <img
          src="./img/icon-metro-pin-1@1x.png"
          className="w-[11px] mt-[24px] mr-[6px]"
          alt=""
        />
      </div>
    </div>
  );
};

const MyPageList = () => {
  const items = [
    "Private seller",
    "Business Page",
    "Business Page",
    "Private seller",
  ];
  const [isToggle, setIsToggle] = useState<number | null>();

  const hamdleToggle = (id: number) => {
    if (isToggle === id) {
      setIsToggle(null);
      return;
    }
    setIsToggle(id);
  };
  return (
    <div className="w-full bg-white pb-[33px] rounded-b-2xl">
      <div className="h-[236px] w-full flex flex-col gap-[6px]  ">
        {items.map((item, idx) => (
          <Item
            key={idx}
            value={item}
            id={idx}
            isToggle={isToggle}
            toggle={() => hamdleToggle(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPageList;
