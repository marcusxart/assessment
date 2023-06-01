import SuggestedList from "./SuggestedList";
import SuggestedUsersOrPages from "./SuggestedUsersOrPages";

const RightSection = () => {
  return (
    <aside className="w-[290px] bgPc:w-[329px] pt-[100px] flex-shrink-0">
      <p className="text-xl text-strongPurple mb-[21px]">Suggested Listings</p>
      <SuggestedList />
      <SuggestedUsersOrPages />
    </aside>
  );
};

export default RightSection;
