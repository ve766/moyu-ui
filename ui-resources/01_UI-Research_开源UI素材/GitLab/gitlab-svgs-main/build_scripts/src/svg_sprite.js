const fs = require('fs');
const path = require('path');
const glob = require('glob');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const { getFilesizeInBytes } = require('./utils');

// eslint-disable-next-line max-params
const createSvgSprite = ({
  destPath,
  globPatterns,
  targetFile,
  addDimension = false,
  svgSizes = {},
} = {}) => {
  const spriteFiles = [];

  globPatterns.forEach((pattern) => {
    spriteFiles.push(...glob.sync(pattern));
  });

  function getSpriteModes() {
    if (addDimension) {
      return {
        inline: true, // Prepare for inline embedding
        stack: {
          example: false,
          dest: '',
          sprite: `${targetFile}.svg`,
        },
      };
    }
    return {
      inline: true, // Prepare for inline embedding
      symbol: {
        example: false,
        dest: '',
        sprite: `${targetFile}.svg`,
      },
      stack: {
        example: false,
        dest: '',
        sprite: `${targetFile}-stacked.svg`,
      },
    };
  }

  const spriter = new SVGSpriter({
    dest: destPath,
    shape: {
      dimension: {
        maxWidth: 288,
        maxHeight: 288,
        attributes: addDimension,
      },
      transform: [
        {
          svgo: {
            /*
              The following optimizations have been turned off because they apparently break our:
              echarts icon rendering:
              - https://github.com/apache/incubator-echarts/issues/11087
              - https://gitlab.com/gitlab-org/gitlab-svgs/issues/73
               */
            plugins: [
              { convertPathData: { noSpaceAfterFlags: false } },
              { mergePaths: { noSpaceAfterFlags: false } },
            ],
          },
        },
      ],
    },
    mode: getSpriteModes(),
    svg: {
      namespaceClassnames: false,
    },
  });

  function getSvgNameAndSize(name) {
    let size = 0;

    if (name.endsWith('-lg')) size = svgSizes.lg;
    else if (name.endsWith('-md')) size = svgSizes.md;
    else if (name.endsWith('-sm')) size = svgSizes.sm;

    if (size !== 0) return { name, svg_size: size };
    return false;
  }

  const icons = [];

  spriteFiles.forEach((file) => {
    const filePath = path.resolve(file);
    const svgInfo = addDimension
      ? getSvgNameAndSize(path.basename(file, '.svg'))
      : path.basename(file, '.svg');

    if (svgInfo) {
      spriter.add(
        filePath,
        null,
        fs.readFileSync(filePath, {
          encoding: 'utf-8',
        }),
      );
      icons.push(svgInfo);
    }
  });

  // Compile the sprite
  return new Promise((resolve, reject) => {
    spriter.compile((error, result) => {
      if (error) {
        return reject(error);
      }

      try {
        Object.values(result).forEach((mode) => {
          Object.values(mode).forEach((resource) => {
            mkdirp.sync(path.dirname(resource.path));
            fs.writeFileSync(resource.path, resource.contents);

            console.log(`Compiled - Saving to ${resource.path}`);
          });
        });

        // Save the Icons in here to a json so we can then display a nice help sprite sheet in GitLab
        const iconsInfo = {
          iconCount: icons.length,
          spriteSize: getFilesizeInBytes(path.join(destPath, `${targetFile}.svg`)),
          icons,
        };

        fs.writeFileSync(
          path.join(destPath, `${targetFile}.json`),
          JSON.stringify(iconsInfo, null, 2),
          'utf8',
        );
      } catch (e) {
        return reject(e);
      }

      return resolve();
    });
  });
};

module.exports = { createSvgSprite };
