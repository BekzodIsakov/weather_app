import sprite from "../assets/icons/sprite.svg";

export const SpriteIcon = ({ name, ...rest }) => {
  return (
    <svg {...rest}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};
