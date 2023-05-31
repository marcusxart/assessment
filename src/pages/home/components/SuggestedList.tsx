import Button from "../../../components/Button";

const Item = () => {
  return (
    <div className="flex gap-[14px]">
      <img
        src="./img/ellipse-32-1@1x.png"
        alt=""
        className="w-[47px] h-[47px]"
      />
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 flex justify-between">
          <div>
            <p className="text-[20px] text-strongPurple">Smoothie</p>
            <p className="text-[10px] text-textGrey">Smoothy store</p>
            <p className="text-[10px] text-textGrey">25 Orders Left</p>
          </div>
          <Button
            text="Order"
            style={{
              fontSize: "15px",
              width: "78px",
              height: "27px",
              borderRadius: "13px",
            }}
          />
        </div>
        <div className="w-[205px] overflow-hidden relative">
          <div className=" w-full h-[11px] bg-[#9B9B9B3B] rounded-[135px]"></div>
          <div
            className={`w-full h-[11px] bg-yellow rounded-[135px] left-0 top-0 absolute z-10 translate-x-[-60%] `}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SuggestedList = () => {
  return (
    <div className="w-full bg-lightPurple pt-[21px] pl-[22px] pr-[18px] pb-[50px] rounded-2xl flex flex-col gap-[15px] mb-[72px]">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default SuggestedList;
