import sprite from "../assets/icons/sprite.svg";

export const SVG = ({ iconName, size, ...rest }) => {
  let width, height;
  width = height =
    size === "large" ? "70px" : size === "medium" ? "40px" : "30px";

  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  );
};
