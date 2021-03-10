import path from 'path'

export const languages = require('../languages');
export const title = "Takanori Oishi @bisctone's Portfolio";
export const shortTitle = 'bicstone';
export const siteUrl = 'https://bicstone.me';
export const description =
  'Webディベロッパー/機械エンジニア Takanori Oishi (おおいし たかのり) @bicstone のポートフォリオサイトです。';
export const author = 'bicstone'
export const image = '/android-chrome-512x512.png';
export const image192 = '/android-chrome-192x192.png';
export const twitter = '@bicstone_me'

export default {
  siteMetadata: {
    title,
    siteUrl,
    description,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-image`,
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: path.join(__dirname, '../', 'src', 'locales'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        siteUrl,
        localeJsonSourceName: `locales`,
        languages: languages.languages,
        defaultLanguage: languages.defaultLanguage,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-165073691-2',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: 'ja',
        name: title,
        short_name: shortTitle,
        description,
        start_url: '/',
        display: 'minimal-ui',
        icons: [
          {
            src: image,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: image192,
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*.png'],
        },
      },
    },
    {
      resolve: 'gatsby-transformer-inline-svg',
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: false,
        directives: {
          'connect-src': "'self' https://www.google-analytics.com",
          'default-src': "'self'",
          'font-src': "'none'",
          'frame-src': "'none'",
          'img-src': "'self' data: https://www.google-analytics.com",
          'manifest-src': "'self'",
          'media-src': "'self'",
          'object-src': "'none'",
          'script-src': "'self' https://www.google-analytics.com",
          'style-src': "'self' 'unsafe-inline'",
          'base-uri': "'none'",
          'form-action': "'none'",
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
  ],
};
