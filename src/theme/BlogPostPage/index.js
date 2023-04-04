import { DiscussionEmbed } from 'disqus-react';
import React from 'react';
import clsx from 'clsx';

import { BlogPostProvider, useBlogPost } from '@docusaurus/theme-common/internal';
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import TOC from '@theme/TOC';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { title } from '../../../docusaurus.config';
import styles from './styles.module.css';

function BlogPostPageContent({ sidebar, children }) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata, toc } = useBlogPost();
  const { title, permalink, nextItem, prevItem, frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}

      <div className={styles.commentContainer}>
        <DiscussionEmbed
          shortname='xiaogaozi'
          config={
            {
              url: siteConfig.url + permalink,
              title: title,
              identifier: permalink,
            }
          }
        />
      </div>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
