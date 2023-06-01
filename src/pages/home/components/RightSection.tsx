import SuggestedList from "./SuggestedList";
import SuggestedUsersOrPages from "./SuggestedUsersOrPages";

const RightSection = () => {
  return (
    <aside className="w-[329px] pt-[100px]">
      <p className="text-xl text-strongPurple mb-[21px]">Suggested Listings</p>
      <SuggestedList />
      <SuggestedUsersOrPages />
    </aside>
  );
};

export default RightSection;
