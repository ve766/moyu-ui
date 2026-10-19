<script>
export default {
  props: { url: { type: String, required: true }, icon: { type: String, required: true } },
  computed: {
    spritePath() {
      return `${this.url}#${this.icon}`;
    },
    xlinkHREF() {
      return { 'xlink:href': this.spritePath };
    },
    setUrl() {
      return { '--icon-url': `url(${this.spritePath})` };
    },
  },
};
</script>
<template>
  <div class="render-test" :style="setUrl">
    <div class="example">
      <svg>
        <use v-bind="xlinkHREF" />
      </svg>
      xlink:href
    </div>

    <div class="example">
      <svg>
        <use :href="spritePath" />
      </svg>
      href
    </div>

    <div class="example">
      <div class="background-image"></div>
      background-image
    </div>

    <div class="example">
      <div class="content"></div>
      content
    </div>

    <div class="example">
      <div class="before"></div>
      ::before content
    </div>

    <div class="example">
      <div class="before-background"></div>
      ::before background
    </div>
  </div>
</template>
<style scoped>
.render-test {
  --icon-url: url('http://example.org');
  display: flex;
}

.example {
  color: red;
  background: lightgoldenrodyellow;
  height: 15rem;
  width: 15rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.example svg {
  fill: currentColor;
  width: 32px;
  height: 32px;
}

.example .background-image {
  width: 32px;
  height: 32px;
  background: red;
  mask-image: var(--icon-url);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}

.example .content {
  content: var(--icon-url);
  height: 32px;
  font-size: 32px;
}

.example .before {
  width: 32px;
  height: 32px;
}

.example .before::before {
  content: var(--icon-url);
  height: 32px;
  width: 32px;
  display: block;
  color: red;
}

.example .before-background {
  width: 32px;
  height: 32px;
  position: relative;
}

.example .before-background:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  display: block;
  background: red;
  mask-image: var(--icon-url);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
  width: 32px;
  height: 32px;
}
</style>
