'use client';
import styled from './NavigationPanel.module.css';
import DB from '../../app/DB.json';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { philosopher } from '@/src/app/fonts';

const NavigationPanel = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      const firstTab = DB.sort((a, b) => a.order - b.order)[0];

      if (firstTab) {
        router.push(`/${firstTab.id}`);
      }
    }
  }, []);

  return (
    <div>
      <Link href="/" className={philosopher.className}>
        <h1 className={styled.dynamicListTitle}>Navigation Dynamic List</h1>
      </Link>
      <ul className={styled.dynamicList}>
        {DB.sort((a, b) => a.order - b.order).map((list) => (
          <li
            className={`${philosopher.className} ${
              pathname === `/${list.id}` ? styled.activeLink : 'dynamicListItem'
            }`}
            key={list.id}
          >
            <Link href={`/${list.id}`} className={philosopher.className}>
              <h2 className={styled.dynamicListSubTitle}>{list.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationPanel;
