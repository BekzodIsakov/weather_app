import sprite from "../assets/icons/sprite.svg";

export const SVG = ({ iconName, size, ...rest }) => {
  let width, height;
  width = height =
    size === "large" ? "60px" : size === "medium" ? "40px" : "20px";

  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  );
};
