const path = require('path');
const { writeFile } = require('fs/promises');
const glob = require('glob');

const { optimizeSVGs } = require('./svg_optimization');
const { getLogoStats, copyFile, getFilesizeInBytes } = require('./utils');

const collectLogos = async (basePath, distPath) => {
  const statsFile = path.join(distPath, 'logos.json');

  console.log('Optimizing SVG logos...');
  const svgs = await optimizeSVGs(
    basePath,
    distPath,
    path.join(basePath, 'illustrations/*(third-party-logos|logos)', '**', '*.svg'),
  );
  console.log('Optimized SVG logos');

  console.log('Copying third party PNG logos...');
  const pngs = await Promise.all(
    glob
      .sync(path.join(basePath, 'illustrations/*(third-party-logos|logos)', '**', '*.png'))
      .map(async (sourcePath) => {
        const relPath = path.relative(basePath, sourcePath);

        await copyFile(sourcePath, path.join(distPath, relPath));

        return { name: relPath, size: getFilesizeInBytes(sourcePath) };
      }),
  );
  console.log('Finished copying third party PNG logos');

  const stats = getLogoStats([...svgs, ...pngs]);

  await writeFile(statsFile, JSON.stringify(stats, null, 2), 'utf-8');
};

module.exports = {
  collectLogos,
};
