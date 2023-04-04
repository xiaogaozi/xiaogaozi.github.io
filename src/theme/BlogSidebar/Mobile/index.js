import React from 'react';

import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  return (
    <ul className="menu__list">
      {sidebar.items.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active">
            {item.title}
          </Link>
        </li>
      ))}

      <li key="archive" className="menu__list-item">
        <Link
          isNavLink
          to="/blog/archive"
          className="menu__link"
          activeClassName="menu__link--active">
          Archive
        </Link>
      </li>
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
