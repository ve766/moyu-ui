const path = require('path');
const { writeFile } = require('fs/promises');

const { optimizeSVGs } = require('./svg_optimization');
const { getIllustrationStats } = require('./utils');

const collectIllustrations = async (basePath, distPath) => {
  const statsFile = path.join(distPath, 'illustrations_individual.json');

  console.log('Optimizing SVG illustrations...');
  const childSVGs = await optimizeSVGs(
    basePath,
    distPath,
    path.join(basePath, 'illustrations/', '**.svg'),
  );
  const nestedSVGs = await optimizeSVGs(
    basePath,
    distPath,
    path.join(basePath, 'illustrations/!(logos|third-party-logos)', '**', '**.svg'),
  );
  console.log('Optimized SVG illustrations');

  const stats = getIllustrationStats([...childSVGs, ...nestedSVGs]);

  await writeFile(statsFile, JSON.stringify(stats, null, 2), 'utf-8');
};

module.exports = {
  collectIllustrations,
};
