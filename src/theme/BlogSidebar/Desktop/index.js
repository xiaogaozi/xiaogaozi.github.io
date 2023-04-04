import React from 'react';
import clsx from 'clsx';

import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export default function BlogSidebarDesktop({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          <Link
            isNavLink
            to="/blog/archive"
            className={styles.sidebarItemLink}
            activeClassName={styles.sidebarItemLinkActive}>
            Archive
          </Link>
        </div>
      </nav>
    </aside>
  );
}
