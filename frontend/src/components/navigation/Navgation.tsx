import React from 'react';

import Link from 'next/link';
import { NavigationNav } from './NavigationNav';

const Navigation = (): JSX.Element => {
  return (
    <NavigationNav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </NavigationNav>
  );
};

export default Navigation;
