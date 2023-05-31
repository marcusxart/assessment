import { useState } from "react";
import NofitcationBadge from "../../../components/NofitcationBadge";
import { sideNavOption } from "../../../utils/sideNavOption";
import Button from "../../../components/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MyPageList from "./MyPageList";

const LeftSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <aside className="w-[260px] pt-[80px]">
      <div className="bg-white py-[11px] px-[17px] rounded-[10px] text-center mb-5">
        <p className="text-xl text-strongPurple mb-[19px]">Switch Account</p>
        <div className="w-full flex text-white">
          <div className="flex-1 pt-[10px] pb-[12px] bg-strongPurple rounded-l-[7px] relative">
            <NofitcationBadge
              value={50}
              className="absolute left-[-10px] top-[-10px]"
            />
            <span>Social</span>
          </div>
          <div className="flex-1 pt-[10px] pb-[12px] bg-grey rounded-r-[7px] relative">
            <NofitcationBadge
              value={50}
              className="absolute right-[-10px] top-[-10px]"
            />
            <span>Business</span>
          </div>
        </div>
      </div>

      <ul className="bg-strongPurple pt-[32px] pb-[41px] px-[40px] list-none rounded-2xl shadow-[2px_6px_20px_#0000001C] flex flex-col gap-[40px]  text-xl mb-[110px]">
        {sideNavOption.map((i, idx) => {
          const { value, Icon } = i;
          return (
            <li
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`flex items-center gap-[16px] cursor-pointer ${
                activeSection === idx ? "text-yellow" : "text-white"
              }`}
            >
              <div className="text-[29px] ">
                <Icon fontSize="inherit" />
              </div>
              <span>{value}</span>
            </li>
          );
        })}
      </ul>

      <div className="w-full pt-6 bg-white rounded-xl ">
        <div className="w-full flex px-5 justify-between mb-[14px]">
          <p className="text-strongPurple text-[15px]">My Pages</p>
          <Button
            text="Create new"
            style={{ paddingRight: "13px" }}
            icon={
              <AddCircleOutlineIcon htmlColor="#FBB03B" fontSize="inherit" />
            }
          />
        </div>
        <div className="px-5 pb-[14px]">
          <form>
            <div className="flex w-full items-center bg-darkGrey gap-[22px] p-2 rounded-2xl shadow-[24px_22px_93px_#00000029]">
              <img
                src="./img/path-99@1x.png"
                alt=""
                className="w-[11px] h-[11px]"
              />
              <input
                type="text"
                placeholder="Search Pages"
                className="bg-transparent focus:outline-none text-[10px] placeholder:text-textGrey text-black w-full"
              />
            </div>
          </form>
        </div>

        <MyPageList />
      </div>
    </aside>
  );
};

export default LeftSection;
