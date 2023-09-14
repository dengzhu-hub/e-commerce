import "./formInput.style.scss";
const FromInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input__container">
      <input className="form-input__text" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input__label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FromInput;
