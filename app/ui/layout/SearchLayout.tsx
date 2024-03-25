'use client';

import { Suspense, useState } from 'react';
import SideNav from './SideNav';
import {PresentationChartBarIcon } from '@heroicons/react/24/solid';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Suspense fallback={<div></div>}>
        <SideNav isOpen={isOpen} onToggleNav={handleToggleNav}/>
        <main className="flex-grow m-4 overflow-auto">
            { children }
        </main>
    </Suspense>
  );
}
