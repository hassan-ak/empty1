'use client';

import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/images/placeholder.jpg';

export const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      src={avatar}
      height='30'
      width='30'
      alt='Avatar'
    />
  );
};
