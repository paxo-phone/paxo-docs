import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Paxo Docs',
  tagline: 'For a better world',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.paxo.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PAXO', // Usually your GitHub org/user name.
  projectName: 'paxo-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',

          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Tous les articles',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  /*
  plugins: [
    [
      
    ],
  ],*/

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Paxo Logo',
        src: 'img/logo.svg', // Assurez-vous que ce fichier existe dans /static/img/
      },
      items: [
        // -- Éléments de gauche --
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // L'ID de votre sidebar dans sidebars.js
          position: 'left',
          label: 'Docs',
        },
        /*{
          to: '/blog',
          label: 'Blog', 
          position: 'left'
        },*/

        // -- Éléments de droite --
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/paxo-phone/PaxOS-9', // Votre URL
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/TcbrbGhXRT',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/gabriel_rochet_paxo',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@paxophone',
            },
          ],
        },
        {
          title: 'More',
          items: [
            /*{
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Substack',
              to: '/substack',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/paxo-phone/PaxOS-9',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paxo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
