import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';

const currentYear = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/geo3d-loader-documentation/',
  title: 'Geo3D Loader',
  description: 'Documentation to support the Geo3D software',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/docs/introduction' },
          { text: 'GVS Configuration', link: '/docs/gvs-config' },
          { text: 'Model Conversion Tools', link: '/docs/model-conversion' },
          { text: 'Project Configuration', link: '/docs/project-config' },
          {
            text: 'Step by Step Guide',
            link: '/docs/Model_loader_instructions',
          },
          { text: 'Serving Data', link: '/docs/serving-data' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BritishGeologicalSurvey' },
    ],
    footer: {
      copyright: `© UKRI (British Geological Survey) and the Polish Geological Institute ${currentYear}.`,
    },
  },
  ignoreDeadLinks: true,
  outDir: './public',
  vite: {
    plugins: [tailwindcss()],
  },
});
