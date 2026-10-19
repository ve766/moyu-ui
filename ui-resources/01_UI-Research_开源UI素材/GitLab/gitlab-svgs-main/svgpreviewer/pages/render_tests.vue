<script>
import RenderTest from '../components/render_test.vue';

export default {
  components: { RenderTest },
};
</script>
<template>
  <div>
    <p>
      Below you can see different renderings for different approaches to svg sprites. It would make
      sense to switch to stacked rendering because it allows us to re-use the sprite icon in CSS,
      but we had issues with it in the past. References:
    </p>
    <ul>
      <li>
        Color related incident:
        <a href="https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2881"
          >pipeline icons are missing colors</a
        >
      </li>
      <li>
        Platform specific emoji issue:
        <a href="https://gitlab.com/gitlab-org/gitlab/-/issues/300711"
          >Improve Attachment / Upload Paperclip Icon / Emoji</a
        >
      </li>
      <li>
        Issue in GitLab SVG:
        <a href="https://gitlab.com/gitlab-org/gitlab-svgs/-/issues/167"
          >Support to use SVGs in CSS</a
        >
      </li>
    </ul>
    <p>Symbols (currently in use):</p>
    <render-test url="dist/icons.svg" icon="status_success_borderless" />
    <p>Stacked:</p>
    <render-test url="dist/icons-stacked.svg" icon="status_success_borderless" />
  </div>
</template>
<style></style>
