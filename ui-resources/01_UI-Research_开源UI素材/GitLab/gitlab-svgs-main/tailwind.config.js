const tailwindDefaults = require('@gitlab/ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './svgpreviewer/components/**/*.{vue,js}',
    './svgpreviewer/layouts/**/*.vue',
    './svgpreviewer/pages/**/*.vue',
    // Scan GitLab UI's own assets
    './node_modules/@gitlab/ui/dist/**/*.js',
  ],
  presets: [tailwindDefaults],
};
