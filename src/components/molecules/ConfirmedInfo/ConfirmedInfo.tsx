import React from 'react';
import { GiRocketFlight } from 'react-icons/gi';
import { ConfirmedInfoData } from './ConfirmedInfo.data';

const ConfirmedInfo = () => {
  const { text } = ConfirmedInfoData;

  return (
    <div className="confirmed-info">
      <GiRocketFlight />
      <p className="confirmed-info__text">{text}</p>
    </div>
  );
};

export default ConfirmedInfo;
