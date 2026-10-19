# Product illustration contribution guidelines

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Contributions to product illustration](#contributions-to-product-illustration)
- [Additional considerations](#additional-considerations)
  - [Subpixel antialiasing](#subpixel-antialiasing)
  - [Naming](#naming)
  - [Optimization](#optimization)
  - [Accessibility](#accessibility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Contributions to product illustration

Everyone can contribute to GitLab, including our [product illustration][illustration-file] in Figma. To contribute, follow these steps:

1. Determine if an existing illustration from the [SVG Previewer](http://gitlab-org.gitlab.io/gitlab-svgs/illustrations) or [illustration file in Figma][illustration-file] already satisfies your need before creating a new one.
1. [Create an issue with the "New illustration" template](https://gitlab.com/gitlab-org/gitlab-svgs/-/issues/new?issuable_template=New%20illustration) (or assign yourself an existing issue) and complete the steps outlined in the issue.
1. High-five yourself and go brew some coffee while you wait for the review. Thanks!

We accept contributions from wider community members who share a Figma [draft](https://help.figma.com/hc/en-us/articles/360041543473#drafts) with proposed changes. We also encourage design contributions/improvements to GitLab itself — use its [issue tracker](https://gitlab.com/gitlab-org/gitlab/issues) to add your ideas to an existing or new issue.

## Additional considerations

### Subpixel antialiasing

Even though we’re working with vector objects, illustrations will still be displayed on screens comprised of pixels. Vector is great for resolution _independence_, but we still want illustrations to look as crisp as possible in the original state.

Illustration elements are aligned to whole pixels to avoid subpixel antialiasing and be as crisp as possible on all screens and resolutions. Elements within an illustration, such as curves or diagonal lines, might not always align exactly to a whole pixel, and in these instances it’s better for the element to feel natural rather than forced.

### Naming

An illustration should be named for the concept it represents, and not literally, unless it represents a universal concept. This will make it easier to identify illustrations for concepts and ensure consistent use. Append the file name with the size abbreviation (`-lg`, `-md`, `-sm`).

### Optimization

An illustration should be optimized for its intended use. An illustration can be animated, themed, or can simply be a static graphic. Use your best judgement when combining shapes or converting a stroke to a path, considering what satisfies the use case and is most performant and future-proof for other uses. A GitLab illustration is always exported as an SVG file, and it makes sense that a smaller file size will benefit performance.

A few tips:

- Create illustrations at the intended size instead of scaling later.
- Simplify shapes and strokes by removing redundant points.
- [SVGOMG](https://jakearchibald.github.io/svgomg/) can really help decrease file size. Just make sure none of the settings or features are counter to intended use.
- Consider using the [Advanced SVG Export](https://www.figma.com/community/plugin/782713260363070260/Advanced-SVG-Export) Figma plugin, which leverages SVGOMG.

### Accessibility

An illustration shouldn't replace content, but compliment it. It’s critical to ensure our illustrations are accessible. Here are two methods depending on how the illustration is included in the document.

**For SVG as `img src`:**

- Include a relevant `alt` tag.
- Add `role="img"` to prevent browsers from traversing the SVG.

Example:

```
<img src="circle.svg" alt="I’m a plain circle." role="img">
```

**For inline SVG:**

- Within the SVG code add `title` and `desc` (optional) elements. They _must_ be the first nested items within the SVG.
- Add unique IDs to the `title` and `desc`; for example, `<title id="uniqueTitleID">SVG Title</title>`.
- On the `<svg>`, add an `aria-labelledby="uniqueTitleID uniqueDescID"` attribute.
- Lastly, on the `<svg>`, add `role="img"` to prevent browsers from traversing the SVG.

Example:

```
<svg id="circle" viewBox="0 0 64 64" aria-labeledby="circleTitle circleDesc" role="img">
  <title id="circleTitle">Circle</title>
  <desc id="circleDesc">I’m a plain circle.</desc>
  <circle cx="32" cy="32" r="32" fill="#222" fill-rule="evenodd"/>
</svg>
```

For illustrations that are purely decoration and add no value to the content, use `aria-hidden="true"`.

Example:

```
<svg viewBox="0 0 64 64" aria-hidden="true">
  <circle cx="32" cy="32" r="32" fill="#222" fill-rule="evenodd"/>
</svg>
```

[illustration-file]: https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA/WIP%3A-Illustration-library?node-id=441%3A2008
