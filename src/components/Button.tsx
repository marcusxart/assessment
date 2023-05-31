import PropTypes from "prop-types";
import CSS from "csstype";

interface Props {
  text: string;
  onClick?: () => void;
  icon?: PropTypes.ReactElementLike;
  style?: CSS.Properties;
  iconSize?: string;
}
const Button = ({ text, onClick, icon, style, iconSize }: Props) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className="text-[10px] bg-strongPurple rounded-xl flex gap-1 py-1 items-center px-[6px] justify-center"
    >
      <div className={`inline-block ${iconSize ? iconSize + "px" : ""}`}>
        {icon ? icon : null}
      </div>
      <span className="text-white">{text}</span>
    </button>
  );
};

export default Button;
