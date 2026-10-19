<script>
import icons from '../static/dist/icons.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'HomePage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: icons.icons,
      spriteSize: icons.spriteSize,
      sizeOptions: [
        { value: 12, text: '12' },
        { value: 16, text: '16 (Default)', default: true },
      ],
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    :size-options="sizeOptions"
    image-sprite="dist/icons.svg"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
    :sprite-size="spriteSize"
    title="Icon"
    copy-message="Click an icon to copy the name"
  />
</template>
