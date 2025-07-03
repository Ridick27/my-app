'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const isActive = isHydrated && pathName === path;

  return (
    <Link 
    className={`px-2 py-1 rounded ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}
      href={path}
    >
      {text}
    </Link>
  );
};
