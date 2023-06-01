import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NofitcationBadge from "./NofitcationBadge";

const NavBar = () => {
  return (
    <nav className="w-full h-[263px] bg-gradient-to-r from-strongPurple to-basePurple rounded-b-[35px] relative  z-10">
      <div className="w-[609px] h-[609px] rounded-full circle_gradient absolute top-[-462px] "></div>
      <div className="w-[609px] h-[609px] rounded-full circle_gradient absolute top-[-346px] left-[-424px]"></div>
      <div className="z-10">
        <div className=" pt-[110px] pl-[125px] pb-[71px] pr-[66px] w-full flex justify-between">
          <div className="flex items-center gap-[14px]">
            <img
              src="./img/ellipse-4@1x.png"
              alt=""
              className="w-[82px] h-[82px]"
            />
            <div className="flex items-center gap-[9.44px]">
              <img
                src="./img/icon-ionic-ios-arrow-back@1x.png"
                alt=""
                className="w-[15px]"
              />
              <p className="text-white text-xl ">Jonathan Deo</p>
            </div>
          </div>
          <div className="flex items-center gap-[50px] bgPc:gap-[68px]">
            <div className="flex items-center gap-[35px] bgPc:gap-[47px]">
              <ul className="list-none flex items-center gap-[25px] bgPc:gap-[30px]">
                <li className="h-fit">
                  <img src="./img/image-1@1x.png" alt="" className="w-[43px]" />
                </li>
                <li>
                  <div className="text-[40px] relative">
                    <NofitcationBadge
                      value={20}
                      className="absolute right-[-10px] top-[6px]"
                    />
                    <EmailIcon fontSize="inherit" htmlColor="#fff" />
                  </div>
                </li>
                <li>
                  <div className="text-[40px] relative">
                    <NofitcationBadge
                      value={20}
                      className="absolute right-[-10px] top-[6px]"
                    />
                    <NotificationsIcon fontSize="inherit" htmlColor="#fff" />
                  </div>
                </li>
              </ul>
              <div className="w-[300px] bgPc:w-[398px] bg-strongPurple rounded-2xl h-[72px] flex items-center py-[21px] px-6 gap-4">
                <img
                  src="./img/path-99-1@1x.png"
                  alt=""
                  className="w-[31px] h-[31px]"
                />
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-white text-xl placeholder:text-white focus:outline-none w-full"
                  />
                </form>
              </div>
            </div>

            <img src="./img/logo.png" alt="" className="w-[70px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
