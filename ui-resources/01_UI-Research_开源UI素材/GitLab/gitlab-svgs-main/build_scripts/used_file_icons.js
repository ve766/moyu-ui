const {
  fileExtensionIcons,
  fileNameIcons,
  twoFileExtensionIcons,
} = require('../src/file_icon_map');

const uniqueIcons = new Set(
  Object.values({ ...fileNameIcons, ...fileExtensionIcons, ...twoFileExtensionIcons }),
);

// These are manually added here used here
// https://gitlab.com/gitlab-org/gitlab/-/blob/137f333f0313e63ebcb144d788e7be0ab9cfbea2/app/assets/javascripts/vue_shared/components/file_icon.vue#L73
uniqueIcons.add('file'); // Fallback icon for unknown file types
uniqueIcons.add('folder-git'); // Used for submodules types

const usedFileIcons = [...uniqueIcons].sort();

// eslint-disable-next-line no-restricted-syntax
for (const icon of usedFileIcons) {
  console.log(icon);
}
