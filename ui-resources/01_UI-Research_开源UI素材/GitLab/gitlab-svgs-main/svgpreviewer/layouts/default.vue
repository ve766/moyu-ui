<script>
import MenuBar from '../components/menu_bar.vue';
import { GlAlert, GlLink } from '../helpers/gitlab_ui';

export default {
  name: 'DefaultLayout',
  components: {
    MenuBar,
    GlAlert,
    GlLink,
  },
};
</script>

<template>
  <div>
    <menu-bar />
    <div class="gl-m-auto gl-max-w-7xl gl-px-5 gl-py-7">
      <gl-alert title="We've moved" variant="warning" :dismissible="false" class="gl-mb-3">
        <p>
          The GitLab SVGs project has
          <gl-link
            href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/3054"
            >moved</gl-link
          >
          into the
          <gl-link href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
            >design.gitlab.com repository</gl-link
          >.
        </p>

        <p class="gl-mb-0">
          Please visit the <gl-link href="https://design.gitlab.com/svgs">new site</gl-link> to see
          an up to date version of this page.
        </p>
      </gl-alert>
      <nuxt />
    </div>
  </div>
</template>
