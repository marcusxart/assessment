import IosShareIcon from "@mui/icons-material/IosShare";

const PostDropdown = () => {
  return (
    <div className="w-[140px] h-[175px] flex flex-col absolute z-10 rounded-xl bg-white right-[-40px] shadow-[0px_3px_26px_#00000021] top-[25px] text-[12px] text-[#490057]">
      <div className="flex flex-1 gap-[11px] items-center pl-[16px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
        <img
          src="./img/icon-awesome-eye@1x.png"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <p className="text-[12px]">Hide </p>
      </div>
      <div className="flex flex-1 gap-[5px] items-center px-[11px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
        <IosShareIcon />
        <p>Copy Link</p>
      </div>
      <div className="flex flex-1 gap-[11px] items-center px-[16px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
        <img
          src="./img/icon-material-report@1x.png"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <p>Pin</p>
      </div>
      <div className="flex flex-1 gap-[11px] items-center px-[16px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
        <img
          src="./img/icon-metro-pin-1@1x.png"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <p>Report Post</p>
      </div>
      <div className="flex flex-1 gap-[11px] items-center px-[16px] border-b border-solid border-[rgba(112, 112, 112, 0.34)]">
        <img
          src="./img/icon-material-delete-sweep@1x.png"
          alt=""
          className="w-[14px] h-[14px]"
        />
        <p>Delete Post</p>
      </div>
    </div>
  );
};

export default PostDropdown;
