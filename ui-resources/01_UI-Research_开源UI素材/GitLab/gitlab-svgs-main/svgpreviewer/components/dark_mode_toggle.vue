<script>
import { mapState, mapActions } from 'vuex';
import { GlButton } from '../helpers/gitlab_ui';

export default {
  name: 'DarkModeToggle',
  components: {
    GlButton,
  },
  computed: {
    ...mapState('mode', ['isDarkMode']),
  },
  methods: {
    ...mapActions('mode', ['toggleDarkMode']),
  },
};
</script>

<template>
  <gl-button aria-label="Toggle theme" class="btn-icon" category="tertiary" @click="toggleDarkMode">
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        v-if="isDarkMode"
        d="M8 13.75a.75.75 0 01.75.75v1a.75.75 0 11-1.5 0v-1a.75.75 0 01.75-.75zm-4.066-1.684a.75.75 0 010 1.06l-.707.708a.75.75 0 11-1.06-1.061l.706-.707a.75.75 0 011.061 0zm9.193 0l.707.707a.75.75 0 11-1.061 1.06l-.707-.706a.75.75 0 011.06-1.061zM8 3.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm7.5 2.5a.75.75 0 110 1.5h-1a.75.75 0 110-1.5h1zm-14 0a.75.75 0 010 1.5h-1a.75.75 0 010-1.5h1zm12.334-5.084a.75.75 0 010 1.061l-.707.707a.75.75 0 01-1.061-1.06l.707-.708a.75.75 0 011.06 0zm-10.607 0l.707.707a.75.75 0 11-1.06 1.061l-.708-.707a.75.75 0 111.061-1.06zM8-.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 018-.25z"
      />
      <path
        v-else
        d="M8 0c.173 0 .344.005.515.016a5.999 5.999 0 00.242 8.227 6.003 6.003 0 007.145 1.01A8 8 0 118 0zM5.805 1.88l-.027.01a6.5 6.5 0 107.606 9.755l.104-.161-.027.003a7.498 7.498 0 01-5.557-1.984l-.207-.2a7.5 7.5 0 01-1.917-7.34l.025-.083z"
      />
    </svg>
  </gl-button>
</template>
