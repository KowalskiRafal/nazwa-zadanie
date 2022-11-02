import { RadioInputType } from './RadioInput.models.d';

const RadioInput = ({
  changed,
  isSelected,
  htmlFor,
  label,
  value,
}: RadioInputType) => (
  <div className="radio-input">
    <input
      className="radio-input__radio"
      onChange={changed}
      value={value}
      type="radio"
      checked={isSelected}
    />
    <label className="radio-input__label" htmlFor={htmlFor}>
      {label}
    </label>
  </div>
);

export default RadioInput;
