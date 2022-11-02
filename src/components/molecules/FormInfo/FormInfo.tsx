import { VscRocket } from 'react-icons/vsc';
import { FormInfoData } from './FormInfo.data';

const FormInfo = () => {
  const { text } = FormInfoData;

  return (
    <div className="form-info">
      <VscRocket />
      <p className="form-info__text">{text}</p>
    </div>
  );
};

export default FormInfo;
