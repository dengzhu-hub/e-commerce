import "./button.style.scss";
/**
 * default button
 * google buttom
 * invert button
 */

const BUTTON_TYPE_CLASS = {
  invert: "invert",
  google: "google-sign-in",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
