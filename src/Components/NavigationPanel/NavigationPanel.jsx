'use client';
import styled from './NavigationPanel.module.css';
import DB from '../../app/DB.json';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

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
      <Link href="/">
        <h1 className={styled.dynamicListTitle}>Navigation Dynamic List</h1>
      </Link>
      <ul className={styled.dynamicList}>
        {DB.sort((a, b) => a.order - b.order).map((list) => (
          <li className={styled.dynamicListItem} key={list.id}>
            <Link href={`/${list.id}`}>
              <h2 className={styled.dynamicListSubTitle}>{list.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationPanel;
