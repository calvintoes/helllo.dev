import React from 'react';
import { connectPoweredBy } from 'react-instantsearch-dom';
import Link from 'next/link';
import Image from 'next/image';

interface PoweredByProps {
  url: string;
}

const PoweredBy = ({ url }: PoweredByProps) => {
  return (
    <div className="powered-by">
      <Link href={url}>
        <div className="algolia-wrapper">
          <Image src="/assets/algolia.png" alt="Algolia Logo" height="100%" width="100%"/>
        </div>
      </Link>
    </div>
  )
};

export default connectPoweredBy(PoweredBy);