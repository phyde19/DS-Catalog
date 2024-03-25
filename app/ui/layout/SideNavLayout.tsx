'use client';

import { useState } from 'react';
import SideNav from './SideNav';
import {PresentationChartBarIcon } from '@heroicons/react/24/solid';

export default function SideNavLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center h-14 bg-white border border-gray-300">
        <PresentationChartBarIcon className="h-6 w-6 mx-5 text-cyan-700" />
        <span className="text-gray-800 text-lg">
          DataScience Catalog
        </span>
      </div>
      <div className="flex flex-grow">
        <SideNav isOpen={isOpen} onToggleNav={handleToggleNav}/>
        <main>
          { children }
        </main>
      </div>
    </div>
  );
}

// import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

// export default function SideNavLayout({ children }: { children: React.ReactNode }) {
//   const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
//   const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{
//         width: {base: (!mobileOpened || !desktopOpened) ? '10px' : '300px'},
//         breakpoint: 'xs',
//         collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
//       }}
//       padding="md"
//     >
//       <AppShell.Header>
//         <Group h="100%" px="md">
//           <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="xs" size="sm" />
//           <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="xs" size="sm" />
//         </Group>
//       </AppShell.Header>
//       <AppShell.Navbar p="lg">
//         Nav
//         {Array(15)
//           .fill(0)
//           .map((_, index) => (
//             <Skeleton key={index} h={28} mt="sm" animate={false} />
//           ))}
//       </AppShell.Navbar>
//       <AppShell.Main>{ children }</AppShell.Main>
//     </AppShell>
//   );
// }