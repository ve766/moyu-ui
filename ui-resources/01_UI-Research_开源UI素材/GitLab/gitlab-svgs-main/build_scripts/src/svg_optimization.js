const path = require('path');
const { writeFile, readFile } = require('fs/promises');
const glob = require('glob');
const mkdirp = require('mkdirp');
const SVGO = require('svgo');

const { getIllustrationStats, getFilesizeInBytes } = require('./utils');

// eslint-disable-next-line max-params
const optimizeSVGs = async (basePath, destPath, globPattern, statsFilePath = null) => {
  const files = glob.sync(globPattern, {});
  const svgo = new SVGO({
    plugins: [
      {
        removeViewBox: false,
      },
    ],
  });

  console.log(`Optimizing ${files.length} files`);

  const optimizeSVG = async (file) => {
    const relName = path.relative(basePath, file);
    const fpath = path.join(destPath, relName);

    const illustration = await readFile(path.resolve(file), 'utf8');

    const optimizedIllustration = await svgo.optimize(illustration, { path: path.resolve(file) });

    mkdirp.sync(path.dirname(fpath));

    await writeFile(fpath, optimizedIllustration.data);

    return {
      name: relName,
      size: getFilesizeInBytes(fpath),
    };
  };

  const illustrations = await Promise.all(files.map((file) => optimizeSVG(file)));

  if (statsFilePath) {
    await writeFile(
      statsFilePath,
      JSON.stringify(getIllustrationStats(illustrations), null, 2),
      'utf8',
    );
  }

  return illustrations;
};

module.exports = { optimizeSVGs };
