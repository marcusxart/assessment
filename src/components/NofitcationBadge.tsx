interface Props {
  value: number;
  className?: string;
}

const NofitcationBadge = ({ value, className }: Props) => {
  return (
    <div
      className={` bg-yellow w-[27px] h-[27px] rounded-full text-[10px] flex  items-center justify-center font-normal ${className}`}
    >
      <span className="text-white">{value}</span>{" "}
      {value ? <span className="text-white">+</span> : null}
    </div>
  );
};

export default NofitcationBadge;
