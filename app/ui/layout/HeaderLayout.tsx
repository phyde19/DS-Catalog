'use client';

import {PresentationChartBarIcon } from '@heroicons/react/24/solid';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-10 flex flex-none items-center h-14 bg-white border border-gray-300">
        <PresentationChartBarIcon className="h-6 w-6 mx-5 text-cyan-700" />
        <span className="text-gray-800 text-lg">
          DataScience Catalog
        </span>
      </div>
      <div className="flex flex-grow items-start">
        { children }
      </div>
    </div>
  );
}
