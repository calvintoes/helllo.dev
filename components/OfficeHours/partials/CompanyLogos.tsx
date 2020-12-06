import React from 'react';
import { CompanyWrapper, LogoWrap } from '../styles';
import { Logos } from './Company';

const CompanyLogos = () => {
  return (
    <CompanyWrapper>
      {Logos.map(logo => {
        const { key, path, alt, sizes } = logo;
        return (
          <LogoWrap key={key} sizes={sizes}>
            <img src={path} alt={alt} />
          </LogoWrap>
        );
      })}
    </CompanyWrapper>
  );
};

export default CompanyLogos;
