import { FaRocket } from 'react-icons/fa';
import { BottomFooterData } from './BottomFooter.data';

const BottomFooter = () => {
  const { title } = BottomFooterData;

  return (
    <div className="bottom-footer">
      <FaRocket /> <p className="bottom-footer__title">{title}</p>
    </div>
  );
};

export default BottomFooter;
