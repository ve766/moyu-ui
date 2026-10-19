<script>
import {
  GlButton,
  GlEmptyState,
  GlSearchBoxByType,
  GlFormGroup,
  GlFormSelect,
} from '../helpers/gitlab_ui';
import {
  mapQueryFieldsToComputed,
  mapQueryFieldsToData,
} from '../helpers/sync_state_to_query_params';
import { bytesToKiloBytes } from '../helpers/unit_utils';
import SvgCard from './svg_card.vue';

const DEFAULT_ICON_SIZE = 16;

const queryFields = [
  { field: 'searchString', param: 'q', default: '' },
  { field: 'selectedSize', param: 'size', default: DEFAULT_ICON_SIZE },
];

export default {
  components: {
    GlButton,
    GlEmptyState,
    GlSearchBoxByType,
    GlFormGroup,
    GlFormSelect,
    SvgCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    layout: {
      type: String,
      required: false,
      default: 'icons',
    },
    imageSprite: {
      type: String,
      required: false,
      default: '',
    },
    sizeOptions: {
      type: Array,
      required: false,
      default: () => [],
    },
    sourcePath: {
      type: String,
      required: false,
      default: '',
    },
    spriteSize: {
      type: Number,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: 'Icon',
    },
    copyMessage: {
      type: String,
      required: false,
      default: 'Click entry to copy their name',
    },
  },
  data() {
    return {
      copyStatus: 0,
      ...mapQueryFieldsToData(queryFields),
    };
  },
  computed: {
    ...mapQueryFieldsToComputed(queryFields),
    filteredItems() {
      if (this.searchString && this.searchString.startsWith('~')) {
        return this.items.filter(
          (item) => `~${item.name ? item.name : item}` === this.searchString,
        );
      }
      return this.items.filter((item) => {
        const name = item.name ? item.name : item;
        return name.includes(this.searchString);
      });
    },
    copyStatusText() {
      switch (this.copyStatus) {
        case 1:
          return 'Copied to your clipboard!';
        case -1:
          return "Copying didn't work :-(";
        default:
          return this.copyMessage;
      }
    },
    kbSize() {
      return this.spriteSize ? `(${bytesToKiloBytes(this.spriteSize)})` : '';
    },
    pageTitle() {
      return this.filteredItems.length === 1 ? this.title : `${this.title}s`;
    },
  },
  methods: {
    setSearchString(value) {
      this.searchString = `~${value}`;
    },
    resetSearch() {
      this.searchString = '';
    },
    setCopyStatus(newStatus) {
      this.copyStatus = newStatus;
      setTimeout(() => {
        this.copyStatus = 0;
      }, 5000);
    },
  },
};
</script>

<template>
  <div>
    <header class="gl-mb-5">
      <div class="gl-mb-4">
        <h2 class="gl-heading-3 gl-mb-1">
          {{ filteredItems.length }} {{ pageTitle }} {{ kbSize }}
        </h2>
        <div>{{ copyStatusText }}</div>
      </div>
      <client-only>
        <div class="gl-flex gl-gap-3 sm:gl-flex-row">
          <gl-form-group class="!gl-mb-0 gl-grow" label="Search" label-for="search">
            <gl-search-box-by-type
              id="search"
              ref="input"
              v-model="searchString"
              autocomplete="off"
              spellcheck="false"
            />
          </gl-form-group>
          <gl-form-group
            v-if="sizeOptions.length"
            class="!gl-mb-0"
            label="Select a size"
            label-for="size"
          >
            <gl-form-select id="size" v-model="selectedSize" :options="sizeOptions" />
          </gl-form-group>
        </div>
      </client-only>
    </header>
    <div
      v-if="filteredItems.length"
      class="gl-grid gl-grid-cols-2 gl-gap-5 gl-p-0"
      :class="{
        'sm:gl-grid-cols-4 lg:gl-grid-cols-8': layout === 'icons',
        'sm:gl-grid-cols-4': layout === 'illustrations',
      }"
    >
      <svg-card
        v-for="entry in filteredItems"
        :key="entry.name ? entry.name : entry"
        :image="entry.name ? entry.name : entry"
        :image-size="imageSprite ? null : entry.size"
        :image-sprite="imageSprite"
        :size="entry.svg_size ? entry.svg_size : Number(selectedSize)"
        :source-path="sourcePath"
        @imageCopied="setCopyStatus"
        @permalinkSelected="setSearchString"
      />
    </div>
    <gl-empty-state v-else title="No results found">
      <template #actions>
        <gl-button @click.prevent="resetSearch">Reset search</gl-button>
      </template>
    </gl-empty-state>
  </div>
</template>
