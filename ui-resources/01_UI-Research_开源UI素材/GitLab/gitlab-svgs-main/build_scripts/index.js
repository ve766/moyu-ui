const path = require('path');
const rimraf = require('rimraf');

const { optimizeSVGs } = require('./src/svg_optimization');
const { createSvgSprite } = require('./src/svg_sprite');
const { copyFolderRecursive, copyFile } = require('./src/utils');
const { collectIllustrations } = require('./src/illustrations');
const { collectLogos } = require('./src/logos');

const BASE_PATH = path.join(__dirname, '..');
const DIST_PATH = path.join(BASE_PATH, 'dist');
const FILE_ICONS_DIST_PATH = path.join(DIST_PATH, 'file_icons');
const STATIC_PATH = path.normalize(path.join(BASE_PATH, 'svgpreviewer', 'static'));

async function buildFiles() {
  console.log('Creating Icon Sprite...');
  await createSvgSprite({
    destPath: DIST_PATH,
    globPatterns: [path.join(BASE_PATH, 'sprite_icons', '*.svg')],
    targetFile: 'icons',
  });
  console.log('Created Icon Sprite');

  console.log('Creating File Icon Sprite...');
  await createSvgSprite({
    destPath: FILE_ICONS_DIST_PATH,
    globPatterns: [path.join(BASE_PATH, 'file_icons', '*.svg')],
    targetFile: 'file_icons',
  });
  console.log('Created File Icon Sprite');

  console.log('Creating Illustration Sprite...');
  await createSvgSprite({
    destPath: DIST_PATH,
    globPatterns: [
      path.join(BASE_PATH, 'illustrations', '*.svg'),
      path.join(BASE_PATH, 'illustrations/!(logos|third-party-logos)', '**', '**.svg'),
    ],
    targetFile: 'illustrations',
    addDimension: true,
    svgSizes: {
      sm: 72,
      md: 144,
      lg: 288,
    },
  });
  console.log('Created Illustration Sprite');

  console.log('Optimizing icons...');
  await optimizeSVGs(
    BASE_PATH,
    DIST_PATH,
    path.join(BASE_PATH, 'sprite_icons', '**', '*.svg'),
    path.join(DIST_PATH, 'icons_individual.json'),
  );
  console.log('Optimized icons');

  console.log('Optimizing file icons...');
  await optimizeSVGs(
    BASE_PATH,
    FILE_ICONS_DIST_PATH,
    path.join(BASE_PATH, 'file_icons', '**', '*.svg'),
    path.join(FILE_ICONS_DIST_PATH, 'file_icons_individual.json'),
  );
  console.log('Optimized file icons');

  await collectIllustrations(BASE_PATH, DIST_PATH);
  await collectLogos(BASE_PATH, DIST_PATH);

  console.log('Copying files to static asset paths for previewer ...');
  await copyFolderRecursive(DIST_PATH, STATIC_PATH);

  console.log('Copying file_icons notice');
  await copyFile(path.join(BASE_PATH, 'file_icons', 'LICENSE.md'), FILE_ICONS_DIST_PATH);
}

rimraf(`${DIST_PATH}/**/*`, async () => {
  console.log('Cleared out dist folder');

  try {
    await buildFiles();
  } catch (err) {
    console.error('Something went wrong');
    console.error(err);
    process.exit(1);
  }
});
