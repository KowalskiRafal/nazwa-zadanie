import { InputType } from './Input.models.d';

const Input = ({
  changed,
  htmlFor,
  label,
  name,
  type,
  placeholder,
  secondName,
  pattern,
  secondPattern,
  value,
  id,
}: InputType) => (
  <div className="input">
    {htmlFor ? (
      <label className="input__label" htmlFor={htmlFor}>
        {label}
      </label>
    ) : null}
    <div className='input__wrapper'><input
      className="input__first-input"
      onChange={changed}
      type={type}
      name={name}
      pattern={pattern}
      id={id}
      required
    />

    {secondName ? (
      <input
        className="input__second-input"
        onChange={changed}
        name={secondName}
        placeholder={placeholder}
        pattern={secondPattern}
        value={value}
        required
      />
    ) : null}
    </div>
  </div>
);

export default Input;
