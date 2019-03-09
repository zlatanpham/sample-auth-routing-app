import React from 'react';
import Header from '@/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="p-5">{children}</div>
    </div>
  );
}
