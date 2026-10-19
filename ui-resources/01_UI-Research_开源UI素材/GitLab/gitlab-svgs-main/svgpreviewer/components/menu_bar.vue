<script>
import { GlButton } from '../helpers/gitlab_ui';
import DarkModeToggle from './dark_mode_toggle.vue';
import GitlabLogo from './gitlab_logo.vue';

export default {
  components: {
    GlButton,
    DarkModeToggle,
    GitlabLogo,
  },
  data() {
    return {
      navItems: [
        { path: '/', label: 'Icons' },
        { path: '/file_icons', label: 'File icons' },
        { path: '/illustrations', label: 'Illustrations' },
        { path: '/logos', label: 'Logos' },
        { path: '/render_tests', label: 'Render tests' },
      ],
    };
  },
  methods: {
    isCurrentPage(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<template>
  <header class="gl-py-3">
    <nav class="gl-m-auto gl-max-w-7xl gl-px-5" aria-label="Main">
      <div class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-3">
        <nuxt-link
          to="/"
          class="gl-flex gl-items-center gl-gap-2 gl-font-bold gl-text-inherit gl-no-underline hover:gl-text-inherit hover:gl-no-underline"
        >
          <gitlab-logo />
          <span class="gl-border-l gl-ml-2 gl-inline-block gl-pl-3"> SVGs </span>
        </nuxt-link>
        <div class="gl-flex gl-items-center gl-gap-3">
          <ul class="gl-m-0 gl-flex gl-list-none gl-flex-wrap gl-p-0">
            <li v-for="(item, index) in navItems" :key="index">
              <nuxt-link #default="{ navigate }" :to="item.path" custom>
                <gl-button
                  category="tertiary"
                  :to="item.path"
                  :selected="isCurrentPage(item.path)"
                  @click="navigate"
                >
                  {{ item.label }}
                </gl-button>
              </nuxt-link>
            </li>
            <li>
              <gl-button category="tertiary" href="https://gitlab.com/gitlab-org/gitlab-svgs">
                Repo ↗︎
              </gl-button>
            </li>
          </ul>
          <dark-mode-toggle />
        </div>
      </div>
    </nav>
  </header>
</template>
