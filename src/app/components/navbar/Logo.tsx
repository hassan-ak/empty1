'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';

export const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className='hidden cursor-pointer md:block'
      src={logo}
      height='100'
      width='100'
      alt='Logo'
    />
  );
};
