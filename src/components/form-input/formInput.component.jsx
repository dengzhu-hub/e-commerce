import { Label, Input, Group } from "./form-input.style";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <Label $shrink={otherProps.value.length}>{label}</Label>}
    </Group>
  );
};
export default FormInput;
