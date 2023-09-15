import "./formInput.style.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input__container">
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input__label`}
        >
          {label}
        </label>
      )}

      <input className="form-input__text" {...otherProps} />
    </div>
  );
};
export default FormInput;
