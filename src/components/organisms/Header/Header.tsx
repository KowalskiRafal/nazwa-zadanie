import React from 'react';
import { FaGitkraken } from 'react-icons/fa';
import { HeadindData } from './Header.data';

const Header = () => {
  const { heading } = HeadindData;

  return (
    <header className="header">
      <FaGitkraken />
      <h1 className="header__title">{heading}</h1>
    </header>
  );
};

export default Header;
