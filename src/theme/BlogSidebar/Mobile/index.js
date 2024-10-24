import React, { memo } from 'react';

import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const ListComponent = ({ items }) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName="menu__list"
      liClassName="menu__list-item"
      linkClassName="menu__link"
      linkActiveClassName="menu__link--active"
    />
  );
};

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  const blogId = useLocation().pathname.split('/')[1];
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <div>
      <BlogSidebarContent
        items={items}
        ListComponent={ListComponent}
        yearGroupHeadingClassName={styles.yearGroupHeading}
      />

      <ul className="menu__list">
        <li key="archive" className="menu__list-item">
          <Link
            isNavLink
            to={`/${blogId}/archive`}
            className="menu__link"
            activeClassName="menu__link--active">
            Archive
          </Link>
        </li>
      </ul>
    </div>
  );
}

function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default memo(BlogSidebarMobile);
