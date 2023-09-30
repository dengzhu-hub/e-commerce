
import { BaseButton, SignWithGoogle, InvertButton } from "./button.style";

/**
 * default button
 * google buttom
 * invert button
 */

export const BUTTON_TYPE_CLASS = {
  base: "base",
  invert: "invert",
  google: "google-sign-in",
};
const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.invert]: InvertButton,
    [BUTTON_TYPE_CLASS.google]: SignWithGoogle,
  }[buttonType]);
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
