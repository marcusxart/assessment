import Button from "../../../components/Button";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const CreatePost = () => {
  return (
    <div className="pt-[37px] px-[34px] pb-[24px] border border-solid border-[#49005730] bg-white rounded-xl mb-9">
      <form className="flex w-full gap-[40px] mb-[45px]">
        <input
          type="text"
          className="h-[52px] w-full border border-solid border-[#70707078] rounded-[29px] text-[15px] text-strongPurple placeholder:text-strongPurple px-[32px] focus:outline-none"
          placeholder="Share your Moments"
        />
        <Button
          text="Post"
          style={{
            height: "52px",
            width: "123px",
            fontSize: "20px",
            padding: "0px",
            borderRadius: "26px",
          }}
        />
      </form>
      <ul className="list-none flex gap-[38px] text-strongPurple text-[15px]">
        <li className="flex items-center gap-2">
          <CollectionsOutlinedIcon fontSize="large" />
          <span className="text-[#393939]">Image</span>
        </li>
        <li className="flex items-center gap-2">
          <VideocamIcon fontSize="large" />
          <span className="text-[#393939]">Videos</span>
        </li>
        <li className="flex items-center gap-2">
          <LocationOnIcon fontSize="large" htmlColor="#FBB03B" />
          <span className="text-[#393939]">Location</span>
        </li>
        <li className="flex items-center gap-2">
          <LocalOfferIcon fontSize="large" />
          <span className="text-[#393939]">Tags</span>
        </li>
      </ul>
    </div>
  );
};

export default CreatePost;
