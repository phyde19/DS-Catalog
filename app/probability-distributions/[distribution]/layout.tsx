import { ReactNode } from 'react';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
  return <section>{children}</section>
}