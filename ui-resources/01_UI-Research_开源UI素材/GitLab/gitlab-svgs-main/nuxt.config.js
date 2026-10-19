import path from 'path';
import sass from 'sass';
import webpack from 'webpack';
import fixUrlInReviewApp from './svgpreviewer/helpers/fix_url_in_review_app';

/* eslint-disable import/no-commonjs */
// Remove after update to webpack@5:
// https://gitlab.com/gitlab-org/gitlab-svgs/-/issues/347
import './build_scripts/patched_crypto';

const CI_ENVIRONMENT_URL = process.env.CI_ENVIRONMENT_URL || false;

// eslint-disable-next-line import/no-default-export
export default {
  server: {
    port: 3333,
  },
  srcDir: 'svgpreviewer/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'GitLab SVG Previewer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Preview Application for all GitLab SVG assets.',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: fixUrlInReviewApp(`/favicon.ico`),
      },
    ],
    bodyAttrs: {
      class: 'ui_indigo',
    },
  },

  css: ['@/assets/app.scss'],

  tailwindcss: {
    cssPath: ['~/assets/tailwind.css', { injectPosition: 'last' }],
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/tailwindcss'],

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  generate: {
    dir: 'public',
  },

  router: {
    base: CI_ENVIRONMENT_URL ? new URL(CI_ENVIRONMENT_URL).pathname : '/',
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      order: ['postcss-preset-env'],
    },
    loaders: {
      scss: {
        implementation: sass,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // Full Vue version for being able to use dynamic templates

      config.module.rules.splice(0, 1);

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader',
      });

      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // https://vue-loader.vuejs.org/options.html#prettify
          prettify: false,
        },
      });

      config.module.rules.push({
        test: /\.css$/,
        include: /node-modules/,
        loader: 'css-loader',
      });

      // Silence webpack warnings about moment/pikaday not being able to resolve.
      // Pikaday is a dependency of gitlab-ui.
      config.plugins.push(new webpack.IgnorePlugin(/moment/, /pikaday/));
    },
    transpile: [
      // These need to be transpiled as they use some advanced syntax like the
      // optional chaining operator
      '@gitlab/ui',
    ],
  },
};
