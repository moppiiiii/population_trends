import React from 'react';

import HeadingPrimary from '@/components/parts/heading/heading-primary/HeadingPrimary.parts';

import HeaderStyle from './Header.organism.module.scss';
import type { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={HeaderStyle['header-container']}>
      <HeadingPrimary>{title}</HeadingPrimary>
    </div>
  );
};

Header.whyDidYouRender = true;
export default Header;
