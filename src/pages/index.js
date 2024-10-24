import React from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={useBaseUrl('blog')}>
            ✍️ Blog
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={useBaseUrl('podcast')}>
            🎙️ Podcast
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={useBaseUrl('projects')}>
            🧑‍💻 Projects
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={useBaseUrl('about')}>
            🖖 About
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="淡泊以明志，宁静以致远">
      <HomepageHeader />
    </Layout>
  );
}
