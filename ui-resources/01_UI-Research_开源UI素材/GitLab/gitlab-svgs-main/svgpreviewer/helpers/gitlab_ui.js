/*
This re-exports some components from GitLab UI in order to enable SSR
For example pikaday does access window and will break in development mode
otherwise

Simply add more components if you need them!
 */
export { default as GlButton } from '@gitlab/ui/dist/components/base/button/button';
export { default as GlCard } from '@gitlab/ui/dist/components/base/card/card';
export { default as GlEmptyState } from '@gitlab/ui/dist/components/regions/empty_state/empty_state';
export { default as GlFormGroup } from '@gitlab/ui/dist/components/base/form/form_group/form_group';
export { default as GlFormSelect } from '@gitlab/ui/dist/components/base/form/form_select/form_select';
export { default as GlSearchBoxByType } from '@gitlab/ui/dist/components/base/search_box_by_type/search_box_by_type';
export { default as GlAlert } from '@gitlab/ui/dist/components/base/alert/alert';
export { default as GlLink } from '@gitlab/ui/dist/components/base/link/link';
