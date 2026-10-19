<script>
import logos from '../static/dist/logos.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'LogosPage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: logos.logos,
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    layout="illustrations"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    title="Logo"
    copy-message="Click a logo to copy the path"
  />
</template>
