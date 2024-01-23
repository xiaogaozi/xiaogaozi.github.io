// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Freedom',
  tagline: 'May the source be with you',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://xiaogaozi.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiaogaozi', // Usually your GitHub org/user name.
  projectName: 'xiaogaozi.github.io', // Usually your repo name.

  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Freedom - Blog',
            description: 'xiaogaozi\'s blog',
            language: 'zh-CN',
            copyright: `Copyright © ${new Date().getFullYear()} xiaogaozi`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-VLS34Q8L74',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Freedom',
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'Podcast',
            position: 'left',
            items: [
              { label: '立入禁止', to: '/podcast/tags/no-admittance' },
            ],
          },
          { to: 'projects', label: 'Projects', position: 'left' },
          { to: 'about', label: 'About', position: 'left' },
          {
            href: 'https://maybe.news',
            label: 'Maybe News',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} xiaogaozi. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'podcast',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'podcast',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './podcast',

        blogTitle: 'Podcast',
        showReadingTime: true,
        feedOptions: {
          type: null,
          // title: 'Freedom - Podcast',
          // description: 'xiaogaozi\'s podcast',
          // language: 'zh-CN',
          // copyright: `Copyright © ${new Date().getFullYear()} xiaogaozi`,
        },
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: false,
        indexBlog: true,
        blogDir: ['blog'],
        blogRouteBasePath: ['/blog'],
        searchResultLimits: 10,
      },
    ],
  ],
};

module.exports = config;
