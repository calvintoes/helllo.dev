import React from 'react';
import { connectPoweredBy } from 'react-instantsearch-dom';
import { ALGOLIA } from '../../../assets/images';

interface PoweredByProps {
  url: string;
}

const PoweredBy = ({ url }: PoweredByProps) => {
  return (
    <div className="powered-by">
      <a href={url}>
        <img src={ALGOLIA} alt="Algolia Logo" />
      </a>
    </div>
  )
};

export default connectPoweredBy(PoweredBy);