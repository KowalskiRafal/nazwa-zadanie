import { TopFooterData } from './TopFooter.data';

const TopFooter = () => {
  const { textRight, textLeft } = TopFooterData;

  return (
    <div className="top-footer">
      <p className="top-footer__text">{textRight}</p>
      <p className="top-footer__text">{textLeft}</p>
    </div>
  );
};

export default TopFooter;
